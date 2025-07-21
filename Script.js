const messages = [
  "[+] Connecting to server...",
  "[+] Accessing system files...",
  "[+] Bypassing firewall...",
  "[+] Injecting malware...",
  "[+] Data extraction in progress...",
  "[!] SYSTEM BREACHED!",
  "[!] ALL FILES COMPROMISED!"
];

let output = document.getElementById("output");
let i = 0;

function showNextMessage() {
  if (i < messages.length) {
    output.textContent += "\n" + messages[i];
    i++;
    setTimeout(showNextMessage, 1000);
  }
}

setTimeout(showNextMessage, 1000);