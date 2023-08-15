# Виселица

Игра "Виселица" на React, TypeScript и Tailwind CSS. 

## Замечания

[Список русских существительных](other/russian_nouns.txt) в единственном числе был взят [здесь.](https://github.com/Harrix/Russian-Nouns/blob/main/dist/russian_nouns.txt)

С помощью Python скрипта [extract_rus_nouns.py](other/extract_rus_nouns.py) я извлек слова без дефисов и буквы `ё`, отобразил их в виде массива со строками и записал в переменную `const RUSSIAN_NOUNS: Array<string>` в файле [russianNouns.ts](src/russianNouns.ts). Получилось 48810 слов. 

В массиве много слов с уменьшительно-ласкательными суффиксами. Далеко идти не нужно, первые слова: "абажур" и "абажурчик". Можно попробовать убрать слова с суффиксом `-чик`, но тогда удалятся `грузчик` и `поручик`. По той же причине нет смысла в удалении слов с другими суффиксами. Оставил как есть.

Python скрипт и txt файл не нужны для сборки приложения, поэтому выделил их в папку `other`.