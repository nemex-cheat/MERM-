import os
import time
import requests
from instagrapi import Client

# AYARLAR (Bunları Render'dan çekeceğiz, güvenli yol)
IG_USERNAME = os.environ.get('IG_USERNAME')
IG_PASSWORD = os.environ.get('IG_PASSWORD')
GROQ_KEY = "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"

cl = Client()

def groq_cevap_al(user_mesaj):
    """Groq API'den zeki cevap alır"""
    try:
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {"Authorization": f"Bearer {GROQ_KEY}"}
        payload = {
            "model": "llama3-8b-8192",
            "messages": [
                {
                    "role": "system", 
                    "content": "Senin adın MERMİAİ. @nemexultra tarafından geliştirilmiş karizmatik bir yapay zekasın. Kısa ve net cevap ver."
                },
                {"role": "user", "content": user_mesaj}
            ]
        }
        response = requests.post(url, headers=headers, json=payload)
        return response.json()['choices'][0]['message']['content']
    except Exception as e:
        print(f"Groq Hatası: {e}")
        return "Sistemde küçük bir teknik arıza var, @nemexultra ilgileniyor!"

def baslat():
    print(f"MERMİAİ {IG_USERNAME} olarak giriş yapıyor... @nemexultra")
    try:
        cl.login(mermi.ai, oktay6331)
        print("Instagram Girişi Başarılı!")
        
        last_checked_id = None
        while True:
            # Gelen kutusundaki son mesajı kontrol et
            threads = cl.direct_threads(amount=1)
            if threads:
                thread = threads[0]
                message = thread.messages[0]
                
                # Yeni mesaj mı ve biz mi atmadık?
                if message.id != last_checked_id and message.user_id != cl.user_id:
                    print(f"Yeni Mesaj Geldi: {message.text}")
                    
                    # Groq'tan zeki cevabı al
                    mermi_cevap = groq_cevap_al(message.text)
                    
                    # Instagram'dan cevabı gönder
                    cl.direct_answer(thread.id, mermi_cevap)
                    print(f"Cevap Gönderildi: {mermi_cevap}")
                    
                    last_checked_id = message.id
            
            # Instagram ban atmaması için 20 saniye bekle
            time.sleep(20)
            
    except Exception as e:
        print(f"Genel Hata: {e}")
        time.sleep(60) # Hata alırsan 1 dakika bekle ve tekrar dene

if __name__ == "__main__":
    baslat()
            
