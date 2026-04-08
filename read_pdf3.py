# -*- coding: utf-8 -*-
import sys, os, glob
sys.stdout.reconfigure(encoding='utf-8')

pdfs = glob.glob('D:/pj/evg/*.pdf')
print('Found:', pdfs)

import fitz
for path in pdfs:
    doc = fitz.open(path)
    print(f'File: {path}, Pages: {len(doc)}')
    for i, page in enumerate(doc):
        text = page.get_text()
        if text.strip():
            print(f'--- стр {i+1} ---')
            print(text[:2000])
