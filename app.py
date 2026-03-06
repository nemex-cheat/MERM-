import os
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Ayarlar
GROQ_API_KEY = "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"
MODEL = "llama3-8b-8192"

@app.route('/', methods=['GET'])
def verify():
    # Instagram/Meta doğrulama için
    return "MERMİAİ Aktif - @nemexultra tarafından geliştirildi", 200

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    try:
        # Gelen mesajı al
        user_message = data['entry'][0]['messaging'][0]['message']['text']
        sender_id = data['entry'][0]['messaging'][0]['sender']['id']
        
        # Groq API'ye sor
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {GROQ_API_KEY}"},
            json={
                "model": MODEL,
                "messages": [
                    {"role": "system", "content": "Senin adın MERMİAİ. @nemexultra tarafından geliştirildin. Profesyonelce cevap ver."},
                    {"role": "user", "content": user_message}
                ]
            }
        )
        
        bot_reply = response.json()['choices'][0]['message']['content']
        # Burada Instagram'a geri gönderme kodu olacak (Token aldığında ekleyeceğiz)
        print(f"Cevap: {bot_reply}")
        
    except Exception as e:
        print(f"Hata: {e}")
        
    return "OK", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
    
