
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
mensagem = 'teste'
numero = '5531996055862'

texto = urllib.parse.quote(f"Oi {pessoa}! {mensagem}")
link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"
navegador.get(link)
while len(navegador.find_elements(By.ID, "side")) < 1:
    time.sleep(1)
    
while len(navegador.find_elements(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span')) < 1:
    time.sleep(1)
navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span').send_keys(Keys.ENTER)
time.sleep(10)




