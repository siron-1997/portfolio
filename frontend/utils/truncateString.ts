const truncateString = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) {
        return str // 文字列が指定の制限以下の場合はそのまま返す
    } else {
        return str.substring(0, maxLength - 4) + ' ...' // 語尾を「...」に変換して返す
    }
}

export default truncateString