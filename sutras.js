// sutras.js

window.SUTRA_REGISTRY = {};
window.SUTRA_MENU = [];

function registerSutra(key, data) {
  if (window.SUTRA_REGISTRY[key]) {
    console.warn("重复注册经文：", key);
    return;
  }

  window.SUTRA_REGISTRY[key] = data;

  window.SUTRA_MENU.push({
    key,
    title: data.displayTitle || data.title,
    abbr: data.abbr || "",
    category: data.category || "",
    lang: data.lang || "",
    volume: data.volume || ""
  });
}