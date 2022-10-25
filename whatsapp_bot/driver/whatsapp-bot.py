
# coding: utf-8

# # Objetivo: Enviar mensagem para várias pessoas ou grupos automaticamente

# ### Cuidados!
# 
# 1. Whatsapp não gosta de nenhum tipo de automação
# 2. Isso pode dar merda, já to avisando
# 3. Isso não é o uso da API oficial do Whatsapp, o próprio whatsapp tem uma API oficial. Se o seu objetivo é fazer envio em massa ou criar aqueles robozinhos que respondem automaticamente no whatsapp, então use a API oficial
# 4. Meu objetivo é 100% educacional

# ### Dito isso, bora automatizar o envio de mensagens no Whatsapp
# 
# - Vamos usar o Selenium (vídeo da configuração na descrição)
# - Temos 1 ferramenta muito boa alternativas:
#     - Usar o wa.me (mais fácil, mais seguro, mas mais demorado)

# In[17]:


# import pandas as pd

# contatos_df = pd.read_excel("Enviar.xlsx")
# display(contatos_df)


# In[20]:


import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

import time
import urllib

navegador = webdriver.Chrome()
navegador.get("https://web.whatsapp.com/")

while len(navegador.find_elements(By.ID,"side")) < 1:
    time.sleep(1)

pessoa = 'Paulo'
mensagem = 'Saiu o resultado do Inteli!!'
numeros = [
    
]

frases = [
["Acerte em tudo que puder acertar. Mas não se torture com seus erros.",
"Paulo Coelho (Manuscrito Encontrado em Accra, 2012)"],
    
["Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão.",
"Mahatma Gandhi"],

["É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada.",
"Mark Zuckerberg"],

["A possibilidade de realizarmos um sonho é o que torna a vida interessante.",
"Paulo Coelho"],

["A vida é uma grande universidade, mas pouco ensina a quem não sabe ser aluno.",
"Augusto Cury"],

["Por medo de diminuir, deixamos de crescer. Por medo de chorar, deixamos de rir.",
"Paulo Coelho (Manual do Guerreiro da Luz, 1997)"],

["A persistência é o caminho do êxito.",
"Charles Chaplin"],

["Quantas coisas perdemos por medo de perder.",
"Paulo Coelho (Brida, 1990)"]
,
["O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
"José de Alencar"],

["A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.",
"Mahatma Gandhi"],

["Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja.",
"Paulo Coelho (O Aleph, 2011)"],

["A coragem não é ausência do medo; é a persistência apesar do medo.",
"Desconhecido"]
]

for i in numeros:
    numero = i
    print("Número:", i)
    
    frase = random.choice(frases)

    texto = urllib.parse.quote(f"""Oii ! {mensagem}\n "{frase[0]}"\n{frase[1]}""")
    link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"
    
    navegador.get(link)
    while len(navegador.find_elements(By.ID, "side")) < 1:
        time.sleep(1)
        
    while len(navegador.find_elements(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span')) < 1:
        time.sleep(1)
    navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span').send_keys(Keys.ENTER)
    time.sleep(5)




