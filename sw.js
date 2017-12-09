/*
 SW- create and install service worker.
 Noz
 For FIREFOX >= 49
 By dj-tech
*/
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('/code.js')
}
