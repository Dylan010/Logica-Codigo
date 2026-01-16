def duplicate_encode(word):
    word_lower = word.lower()
    wordnew = []
    for i in word_lower:
        if word_lower.count(i) > 1:
            wordnew.append(")")
        else:
            wordnew.append("(")
    return "".join(wordnew)
