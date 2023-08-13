with open('russian_nouns.txt', 'r', encoding='utf-8') as txt:
    lines = []
    for word in txt.readlines():
        if '-' not in word:
            lines.append(word.strip())

    print(lines)
    print(len(lines))