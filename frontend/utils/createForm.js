export default function createForm(action, method, lat, lon) {
    // フォームを作成
    const form = document.createElement('form')
    // フォームにaction、methodを指定
    form.setAttribute('action', action)
    form.setAttribute('method', method)
    // 経度、緯度を入力
    const inputLat = document.createElement('input')
    const inputLon = document.createElement('input')
    // 名前と値を代入
    inputLat.name = 'lat'
    inputLon.name = 'lon'
    inputLat.value = lat
    inputLon.value = lon
    // フォームに追加
    form.appendChild(inputLat)
    form.appendChild(inputLon)
    // 送信
    form.submit()
    // フォームを削除
    inputLat.remove()
    inputLon.remove()
    form.remove()
}