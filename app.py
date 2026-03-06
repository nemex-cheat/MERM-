import time
import requests
from instagrapi import Client

# AYARLAR (Direkt buraya yazdım ki hata çıkmasın karsim)
IG_USERNAME = "mermi.ai"
IG_PASSWORD = "oktay6331"
GROQ_KEY = "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"

cl = Client()

def groq_cevap_al(user_mesaj):
    try:
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {"Authorization": f"Bearer {GROQ_KEY}"}
        payload = {
            "model": "llama3-8b-8192",
            "messages": [
                {"role": "system", "content": "Adın MERMİAİ. @nemexultra tarafından yapıldın. Karizmatik ve kısa cevaplar ver."},
                {"role": "user", "content": user_mesaj}
            ]
        }
        response = requests.post(url, headers=headers, json=payload)
        return response.json()['choices'][0]['message']['content']
    except:
        return "Sistemde ufak bir arıza var karsim."

def baslat():
    print(f"MERMİAİ {IG_USERNAME} bağlanıyor... @nemexultra")
    try:
        # Giriş yap
        cl.login(IG_USERNAME, IG_PASSWORD)
        print("INSTAGRAM GİRİŞİ BAŞARILI! 🚀")
        
        last_checked_id = None
        while True:
            try:
                threads = cl.direct_threads(amount=1)
                if threads:
                    thread = threads[0]
                    message = thread.messages[0]
                    if message.id != last_checked_id and message.user_id != cl.user_id:
                        cevap = groq_cevap_al(message.text)
                        cl.direct_answer(thread.id, cevap)
                        print(f"Cevap Yollandı: {cevap}")
                        last_checked_id = message.id
            except Exception as e:
                print(f"Döngü hatası: {e}")
            
            time.sleep(30) # Ban yememek için 30 saniye
            
    except Exception as e:
        print(f"KRİTİK HATA: {e}")

if __name__ == "__main__":
    baslat()
    
