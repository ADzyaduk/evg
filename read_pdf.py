# -*- coding: utf-8 -*-
import pdfplumber

with pdfplumber.open('D:/pj/evg/Бренд бук ткани3.pdf') as pdf:
    for i, page in enumerate(pdf.pages[:15]):
        print(f'--- стр {i+1} ---')
        text = page.extract_text()
        if text:
            print(text)
        else:
            print('(пусто)')
        print()
