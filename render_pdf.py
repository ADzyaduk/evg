# -*- coding: utf-8 -*-
import sys, glob, os
sys.stdout.reconfigure(encoding='utf-8')

import fitz

pdfs = glob.glob('D:/pj/evg/*.pdf')
doc = fitz.open(pdfs[0])

out_dir = 'D:/pj/evg/pdf_pages'
os.makedirs(out_dir, exist_ok=True)

for i, page in enumerate(doc):
    mat = fitz.Matrix(2, 2)  # 2x zoom for readability
    pix = page.get_pixmap(matrix=mat)
    out_path = f'{out_dir}/page_{i+1:02d}.png'
    pix.save(out_path)

print(f'Saved {len(doc)} pages to {out_dir}')
