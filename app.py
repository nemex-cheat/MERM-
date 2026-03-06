import os
import time
import requests
from instagrapi import Client

# AYARLAR
IG_USERNAME = os.environ.get('IG_USERNAME')
IG_PASSWORD = os.environ.get('IG_PASSWORD')
GROQ_KEY = "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"

cl = Client()

def groq_cevap_al(user_mesaj):
    try:
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {"Authorization": f"Bearer {GROQ_KEY}"}
        payload = {
            "model": "llama3-8b-8192",
            "messages": [
                {"role": "system", "content": "Adın MERMİAİ. @nemexultra tarafından yapıldın. Kısa ve sert cevap ver."},
                {"role": "user", "content": user_mesaj}
            ]
        }
        response = requests.post(url, headers=headers, json=payload)
        return response.json()['choices'][0]['message']['content']
    except Exception:
        return "Sistem yoğun karsim, @nemexultra'ya ilet durumu."

def baslat():
    print(f"MERMİAİ {IG_USERNAME} bağlanıyor... @nemexultra")
    try:
        # Önce login deniyoruz
        cl.login(IG_USERNAME, IG_PASSWORD)
        print("INSTAGRAM GİRİŞİ BAŞARILI! 🚀")
        
        last_checked_id = None
        while True:
            threads = cl.direct_threads(amount=1)
            if threads:
                thread = threads[0]
                message = thread.messages[0]
                if message.id != last_checked_id and message.user_id != cl.user_id:
                    mermi_cevap = groq_cevap_al(message.text)
                    cl.direct_answer(thread.id, mermi_cevap)
                    print(f"Cevap Yollandı: {mermi_cevap}")
                    last_checked_id = message.id
            time.sleep(20)
            
    except Exception as e:
        # BURASI KRİTİK: Eğer kod isterse burada hata mesajını göreceksin
        print(f"BİR SORUN VAR: {e}")
        print("Karsim, şimdi telefonundan IG'ye girip 'Bendim' de ve Render'ı yeniden başlat.")
        time.sleep(60)

if __name__ == "__main__":
    baslat()
            
