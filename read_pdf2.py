# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

try:
    import fitz  # PyMuPDF
    doc = fitz.open('D:/pj/evg/\u0411\u0440\u0435\u043d\u0434 \u0431\u0443\u043a \u0442\u043a\u0430\u043d\u04433.pdf')
    print(f'Страниц: {len(doc)}')
    for i, page in enumerate(doc):
        text = page.get_text()
        if text.strip():
            print(f'--- стр {i+1} ---')
            print(text)
except Exception as e:
    print(f'Ошибка: {e}')
