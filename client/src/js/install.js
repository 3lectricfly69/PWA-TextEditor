const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event XXX
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element XXX
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event XXX
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
