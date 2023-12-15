const weapons = [
    { name: "わかばシューター", category: "シューター" },
    { name: "スプラシューター", category: "シューター" },
    { name: "プロモデラーMG", category: "シューター" },
    { name: "N-ZAP85", category: "シューター" },
    { name: "もみじシューター", category: "シューター" },
    { name: "プライムシューター", category: "シューター" },
    { name: "ボールドマーカー", category: "シューター" },
    { name: "スプラシューターコラボ", category: "シューター" },
    { name: "N-ZAP89", category: "シューター" },
    { name: "52ガロン", category: "シューター" },
    { name: "スペースシューターコラボ", category: "シューター" },
    { name: "ボールドマーカーネオ", category: "シューター" },
    { name: "L3リールガン", category: "シューター" },
    { name: "ジェットスイーパー", category: "シューター" },
    { name: "シャープマーカー", category: "シューター" },
    { name: "96ガロン", category: "シューター" },
    { name: "プロモデラーRG", category: "シューター" },
    { name: "ボトルガイザー", category: "シューター" },
    { name: "L3リールガンD", category: "シューター" },
    { name: "プライムシューターコラボ", category: "シューター" },
    { name: "ジェットスイーパーカスタム", category: "シューター" },
    { name: "シャープマーカーネオ", category: "シューター" },
    { name: "96ガロンデコ", category: "シューター" },
    { name: "H3リールガン", category: "シューター" },
    { name: "スペースシューター", category: "シューター" },
    { name: "ボトルガイザーフォイル", category: "シューター" },
    { name: "H3リールガンD", category: "シューター" },
    { name: "スプラチャージャー", category: "チャージャー" },
    { name: "スクイックリンα", category: "チャージャー" },
    { name: "スプラチャージャーコラボ", category: "チャージャー" },
    { name: "スプラスコープ", category: "チャージャー" },
    { name: "R-PEN/5H", category: "チャージャー" },
    { name: "スプラスコープコラボ", category: "チャージャー" },
    { name: "リッター4K", category: "チャージャー" },
    { name: "P-PEN/5B", category: "チャージャー" },
    { name: "14式竹筒銃・甲", category: "チャージャー" },
    { name: "ソイチューバー", category: "チャージャー" },
    { name: "4Kスコープ", category: "チャージャー" },
    { name: "ソイチューバーカスタム", category: "チャージャー" },
    { name: "ホットブラスター", category: "ブラスター" },
    { name: "ラピッドブラスター", category: "ブラスター" },
    { name: "ホットブラスターカスタム", category: "ブラスター" },
    { name: "ラピッドブラスターデコ", category: "ブラスター"},
    { name: "ロングブラスター", category: "ブラスター" },
    { name: "ノヴァブラスター", category: "ブラスター" },
    { name: "S-BLAST92", category: "ブラスター" },
    { name: "ノヴァブラスターネオ", category: "ブラスター" },
    { name: "クラッシュブラスター", category: "ブラスター" },
    { name: "クラッシュブラスターネオ", category: "ブラスター" },
    { name: "Rブラスターエリート", category: "ブラスター" },
    { name: "S-BLAST91", category: "ブラスター" },
    { name: "Rブラスターエリートデコ", category: "ブラスター" },
    { name: "スプラローラー", category: "ローラー" },
    { name: "カーボンローラー", category: "ローラー" },
    { name: "スプラローラーコラボ", category: "ローラー" },
    { name: "ダイナモローラー", category: "ローラー" },
    { name: "ワイドローラー", category: "ローラー" },
    { name: "ダイナモローラーテスラ", category: "ローラー" },
    { name: "ワイドローラーコラボ", category: "ローラー" },
    { name: "カーボンローラーデコ", category: "ローラー" },
    { name: "ヴァリアブルローラー", category: "ローラー" },
    { name: "ホクサイ", category: "フデ" },
    { name: "パブロ", category: "フデ" },
    { name: "ホクサイ・ヒュー", category: "フデ" },
    { name: "フィンセント", category: "フデ" },
    { name: "パブロ・ヒュー", category: "フデ" },
    { name: "フィンセント・ヒュー", category: "フデ" },
    { name: "バケットスロッシャー", category: "スロッシャー" },
    { name: "ヒッセン", category: "スロッシャー" },
    { name: "バケットスロッシャーデコ", category: "スロッシャー" },
    { name: "スクリュースロッシャー", category: "スロッシャー" },
    { name: "モップリン", category: "スロッシャー" },
    { name: "ヒッセン・ヒュー", category: "スロッシャー" },
    { name: "オーバーフロッシャー", category: "スロッシャー" },
    { name: "スクリュースロッシャーネオ", category: "スロッシャー" },
    { name: "オーバーフロッシャーデコ", category: "スロッシャー" },
    { name: "エクスプロッシャー", category: "スロッシャー" },
    { name: "バレルスピナー", category: "スピナー" },
    { name: "スプラスピナー", category: "スピナー" },
    { name: "イグザスピナー", category: "スピナー" },
    { name: "バレルスピナーデコ", category: "スピナー" },
    { name: "ハイドラント", category: "スピナー" },
    { name: "スプラスピナーコラボ", category: "スピナー" },
    { name: "ノーチラス47", category: "スピナー" },
    { name: "クーゲルシュライバー・ヒュー", category: "スピナー"},
    { name: "クーゲルシュライバー", category: "スピナー"},
    { name: "スプラマニューバー", category: "マニューバー" },
    { name: "デュアルスイーパー", category: "マニューバー" },
    { name: "スプラマニューバーコラボ", category: "マニューバー" },
    { name: "スパッタリー", category: "マニューバー" },
    { name: "デュアルスイーパーカスタム", category: "マニューバー" },
    { name: "クアッドホッパーブラック", category: "マニューバー" },
    { name: "ケルビン525", category: "マニューバー" },
    { name: "クアッドホッパーホワイト", category: "マニューバー" },
    { name: "スパッタリー・ヒュー", category: "マニューバー" },
    { name: "パラシェルター", category: "シェルタ" },
    { name: "キャンピングシェルター", category: "シェルタ" },
    { name: "スパイガジェット", category: "シェルタ" },
    { name: "パラシェルターソレーラ", category: "シェルタ" },
    { name: "キャンピングシェルターソレーラ", category: "シェルタ" },
    { name: "スパイガジェットソレーラ", category: "シェルタ" },
    { name: "ドライブワイパー", category: "ワイパー" },
    { name: "ドライブワイパーデコ", category: "ワイパー" },
    { name: "ジムワイパー", category: "ワイパー" },
    { name: "ジムワイパー・ヒュー", category: "ワイパー" },
    { name: "トライストリンガー", category: "ストリンガー" },
    { name: "トライストリンガーコラボ", category: "ストリンガー" },
    { name: "LACT450", category: "ストリンガー" },
    { name: "LACT450デコ", category: "ストリンガー" },
   




    // 武器データを追加する場合はここにオブジェクトを追加してください
];

let assignedWeapons = [];

function getRandomWeapon(selectedCategory) {
    let filteredWeapons = weapons.filter(weapon => weapon.category === selectedCategory || selectedCategory === "all");
    return filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
}

function randomAssignWeapons() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    const nameInput = document.getElementById("nameInput");
    const names = nameInput.value.trim().split(/\r?\n/);
    const selectedCategory = document.getElementById("categorySelect").value;
    assignedWeapons = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i].trim();
        if (name !== "") {
            const weapon = getRandomWeapon(selectedCategory);
            assignedWeapons.push({ name, weapon });
            const characterDiv = document.createElement("div");
            characterDiv.textContent = `${name}さん：「${weapon.name}」`;
            resultDiv.appendChild(characterDiv);
        }
    }
}

function sendToDiscord() {
    const webhookUrl = document.getElementById("webhookUrlInput").value.trim();
    if (!webhookUrl) {
        alert("Webhook URLを入力してください。");
        return;
    }
    const payload = {
        username: "割り当てボット", // 送信者の名前
        avatar_url: "", // アイコンのURL (空の場合はデフォルトのBotアイコン)
        content: `【結果一覧】\n${assignedWeapons.map(({ name, weapon }) => `${name}さん：「${weapon.name}」`).join("\n")}`,
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert("結果をDiscordに送信しました！");
    })
    .catch(error => {
        console.error("Error sending message to Discord:", error);
        alert("Discordへの送信中にエラーが発生しました。");
    });
}
