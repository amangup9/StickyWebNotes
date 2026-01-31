chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addNote",
      title: "Add note",
      contexts: ["all"]
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
      chrome.tabs.sendMessage(tab.id, {
        action: "ADD_NOTE_CLICKED", // Defensive programming
      });
    });

    console.log('Sticky Notes Extension Installed');
  });
