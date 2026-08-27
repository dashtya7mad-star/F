const BOT_TOKEN = '8422907042:AAE4hkxpTZtfJh5wDlJEI9NeLLjR3jt7XNQ';
const CHAT_ID = '5015426926';
function openFacebook() {
    const facebookApp = 'fb://facewebmodal/f?href=' + encodeURIComponent(
        'https://www.facebook.com/reel/1363942655583132/'
    );

    window.location.href = facebookApp;

    setTimeout(() => {
        window.location.href =
            'https://www.facebook.com/reel/1363942655583132/';
    }, 1500);
}
