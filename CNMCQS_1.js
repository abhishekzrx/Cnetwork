// window.CNMCQS_1 = [
//   // ─────────────────────────────────────────────────────────
//   // CHAPTER 1 - 100 MCQs
//   // Format: { question: "...", options: ["A", "B", "C", "D"], answer: 0 (index of correct option 0-3) }
//   // ─────────────────────────────────────────────────────────
//   { 
//     question: "This is a sample question for Chapter 1?",
//     options: ["Option A", "Option B", "Option C", "Option D"], 
//     answer: 0 
//   },
//   // Add remaining 99 questions here...
// ];

// ─────────────────────────────────────────────────────────
// CHAPTER 2 - DATA LINK LAYER (100 MCQs)
// Format: { question: "...", options: ["A", "B", "C", "D"], answer: index (0-3) }
// ─────────────────────────────────────────────────────────
window.CNMCQS_1 = [
  // ─────────────────────────────────────────
  // CHAPTER 1 - COMPUTER NETWORK (120 MCQs)
  // ─────────────────────────────────────────

  { question: "What is a computer network?", options: ["Collection of devices", "Interconnected devices", "Single system", "Database"], answer: 1 },
  { question: "Main purpose of network?", options: ["Data deletion", "Resource sharing", "Compilation", "Execution"], answer: 1 },
  { question: "What is a node?", options: ["Protocol", "Device", "Cable", "Software"], answer: 1 },
  { question: "Data communication means?", options: ["Storage", "Exchange of data", "Deletion", "Processing"], answer: 1 },
  { question: "Which is network component?", options: ["CPU", "Router", "RAM", "ALU"], answer: 1 },

  { question: "Which factor affects performance?", options: ["Bandwidth", "Color", "Shape", "Size"], answer: 0 },
  { question: "Bandwidth is?", options: ["Speed of CPU", "Data transfer rate", "Storage", "Memory"], answer: 1 },
  { question: "Latency means?", options: ["Speed", "Delay", "Storage", "Signal"], answer: 1 },
  { question: "Jitter is?", options: ["Constant delay", "Delay variation", "Speed", "Loss"], answer: 1 },
  { question: "Throughput is?", options: ["Max rate", "Actual rate", "Memory", "Delay"], answer: 1 },

  { question: "LAN stands for?", options: ["Local Area Network", "Large Area Network", "Logical Area Network", "Long Area"], answer: 0 },
  { question: "WAN covers?", options: ["Room", "Building", "City", "Large area"], answer: 3 },
  { question: "MAN covers?", options: ["Room", "City", "Country", "World"], answer: 1 },
  { question: "PAN is?", options: ["Personal network", "Public network", "Private network", "Protocol"], answer: 0 },
  { question: "Internet is?", options: ["Single network", "Network of networks", "LAN", "PAN"], answer: 1 },

  { question: "Intranet is?", options: ["Public network", "Private network", "Global network", "WAN"], answer: 1 },
  { question: "Extranet is?", options: ["Extended intranet", "LAN", "WAN", "PAN"], answer: 0 },
  { question: "Topology means?", options: ["Network layout", "Protocol", "Device", "Data"], answer: 0 },
  { question: "Bus topology uses?", options: ["Multiple cables", "Single cable", "Hub", "Router"], answer: 1 },
  { question: "Star topology uses?", options: ["Hub", "Cable", "Ring", "Tree"], answer: 0 },

  { question: "Ring topology forms?", options: ["Line", "Circle", "Tree", "Mesh"], answer: 1 },
  { question: "Mesh topology is?", options: ["Cheap", "Complex", "Reliable", "Simple"], answer: 2 },
  { question: "Which topology has single point failure?", options: ["Star", "Mesh", "Bus", "Ring"], answer: 0 },
  { question: "Which topology is most reliable?", options: ["Bus", "Star", "Mesh", "Ring"], answer: 2 },
  { question: "Which topology is cheapest?", options: ["Mesh", "Bus", "Star", "Ring"], answer: 1 },

  { question: "Protocol defines?", options: ["Hardware", "Rules", "Software", "Speed"], answer: 1 },
  { question: "HTTP is?", options: ["Device", "Protocol", "Cable", "Address"], answer: 1 },
  { question: "FTP is used for?", options: ["Mail", "File transfer", "Browsing", "Streaming"], answer: 1 },
  { question: "SMTP is used for?", options: ["File", "Mail sending", "Browsing", "Chat"], answer: 1 },
  { question: "DNS converts?", options: ["IP→MAC", "Name→IP", "Data→Signal", "Signal→Data"], answer: 1 },

  { question: "IP address is?", options: ["Physical", "Logical", "Temporary", "Dynamic"], answer: 1 },
  { question: "MAC address is?", options: ["Logical", "Physical", "Temporary", "Dynamic"], answer: 1 },
  { question: "Which is unique?", options: ["IP", "MAC", "Port", "URL"], answer: 1 },
  { question: "IPv4 size?", options: ["16-bit", "32-bit", "64-bit", "128-bit"], answer: 1 },
  { question: "IPv6 size?", options: ["32-bit", "64-bit", "128-bit", "256-bit"], answer: 2 },

  { question: "Transmission media is?", options: ["Software", "Path", "Protocol", "Device"], answer: 1 },
  { question: "Guided media?", options: ["Wi-Fi", "Fiber", "Radio", "Satellite"], answer: 1 },
  { question: "Unguided media?", options: ["Fiber", "Cable", "Wi-Fi", "Twisted"], answer: 2 },
  { question: "Fiber uses?", options: ["Electricity", "Light", "Radio", "Sound"], answer: 1 },
  { question: "Twisted pair is?", options: ["Wireless", "Guided", "Optical", "Satellite"], answer: 1 },

  { question: "Coaxial cable is?", options: ["Guided", "Wireless", "Optical", "Radio"], answer: 0 },
  { question: "Wi-Fi is?", options: ["Guided", "Unguided", "Optical", "Cable"], answer: 1 },
  { question: "Bluetooth is?", options: ["LAN", "PAN", "WAN", "MAN"], answer: 1 },
  { question: "Satellite is?", options: ["Guided", "Unguided", "Cable", "Fiber"], answer: 1 },
  { question: "Noise causes?", options: ["Speed", "Error", "Storage", "Backup"], answer: 1 },

  { question: "Attenuation means?", options: ["Gain", "Loss", "Speed", "Storage"], answer: 1 },
  { question: "Distortion is?", options: ["Signal change", "Speed", "Storage", "Data"], answer: 0 },
  { question: "Encoding means?", options: ["Data→Signal", "Signal→Data", "Routing", "Switching"], answer: 0 },
  { question: "Decoding means?", options: ["Signal→Data", "Data→Signal", "Routing", "Switching"], answer: 0 },
  { question: "Full duplex?", options: ["One-way", "Two-way simultaneous", "Half", "None"], answer: 1 },

  { question: "Half duplex?", options: ["One-way", "One at a time", "Full", "None"], answer: 1 },
  { question: "Simplex?", options: ["One-way", "Two-way", "Full", "Half"], answer: 0 },
  { question: "Router works at?", options: ["Physical", "Data link", "Network", "Transport"], answer: 2 },
  { question: "Switch works at?", options: ["Physical", "Data link", "Network", "Transport"], answer: 1 },
  { question: "Hub works at?", options: ["Physical", "Data link", "Network", "Transport"], answer: 0 },

  // ------- remaining continued till 120 (ensuring total count) -------

  { question: "Firewall is?", options: ["Security", "Speed", "Storage", "Backup"], answer: 0 },
  { question: "VPN is?", options: ["Secure network", "Public", "LAN", "PAN"], answer: 0 },
  { question: "Encryption means?", options: ["Hide data", "Send data", "Route", "Delete"], answer: 0 },
  { question: "Decryption means?", options: ["Reveal data", "Hide data", "Delete", "Store"], answer: 0 },
  { question: "Malware is?", options: ["Good", "Harmful", "Hardware", "Protocol"], answer: 1 },

  { question: "Phishing is?", options: ["Attack", "Device", "Protocol", "Cable"], answer: 0 },
  { question: "DoS attack?", options: ["Denial", "Data", "Device", "Signal"], answer: 0 },
  { question: "Packet is?", options: ["Unit of data", "Device", "Protocol", "Signal"], answer: 0 },
  { question: "Port number is?", options: ["Process ID", "Device ID", "Network ID", "Address"], answer: 0 },
  { question: "QoS means?", options: ["Quality of service", "Quantity", "Speed", "Storage"], answer: 0 }

  ,
  { question: "What is routing?", options: ["Path selection", "Data deletion", "Encoding", "Switching"], answer: 0 },
  { question: "What is switching?", options: ["Data forwarding", "Routing", "Encoding", "Storage"], answer: 0 },
  { question: "Which device forwards packets?", options: ["Router", "Hub", "Cable", "Repeater"], answer: 0 },
  { question: "Which device broadcasts data?", options: ["Hub", "Switch", "Router", "Bridge"], answer: 0 },
  { question: "Which device filters data?", options: ["Switch", "Hub", "Repeater", "Cable"], answer: 0 },

  { question: "Which device connects networks?", options: ["Router", "Switch", "Hub", "Repeater"], answer: 0 },
  { question: "Which device connects same networks?", options: ["Switch", "Router", "Gateway", "Modem"], answer: 0 },
  { question: "Which converts digital to analog?", options: ["Modem", "Router", "Switch", "Hub"], answer: 0 },
  { question: "Which converts analog to digital?", options: ["Modem", "Router", "Switch", "Hub"], answer: 0 },
  { question: "Which device amplifies signal?", options: ["Repeater", "Router", "Switch", "Gateway"], answer: 0 },

  { question: "Which device connects LAN segments?", options: ["Bridge", "Router", "Switch", "Hub"], answer: 0 },
  { question: "Which device works at all layers?", options: ["Gateway", "Router", "Switch", "Hub"], answer: 0 },
  { question: "Which protocol is used for ping?", options: ["ICMP", "TCP", "UDP", "HTTP"], answer: 0 },
  { question: "Which protocol is unreliable?", options: ["UDP", "TCP", "HTTP", "FTP"], answer: 0 },
  { question: "Which protocol is reliable?", options: ["TCP", "UDP", "IP", "ICMP"], answer: 0 },

  { question: "Which provides connectionless service?", options: ["UDP", "TCP", "FTP", "HTTP"], answer: 0 },
  { question: "Which provides connection-oriented service?", options: ["TCP", "UDP", "IP", "ICMP"], answer: 0 },
  { question: "Which protocol works at network layer?", options: ["IP", "TCP", "UDP", "HTTP"], answer: 0 },
  { question: "Which protocol works at transport layer?", options: ["TCP", "IP", "ICMP", "ARP"], answer: 0 },
  { question: "Which protocol maps IP to MAC?", options: ["ARP", "RARP", "DNS", "ICMP"], answer: 0 },

  { question: "Which protocol maps MAC to IP?", options: ["RARP", "ARP", "DNS", "ICMP"], answer: 0 },
  { question: "Which protocol is used in email sending?", options: ["SMTP", "POP3", "FTP", "HTTP"], answer: 0 },
  { question: "Which protocol is used in email receiving?", options: ["POP3", "SMTP", "FTP", "HTTP"], answer: 0 },
  { question: "Which protocol is used in web browsing?", options: ["HTTP", "FTP", "SMTP", "DNS"], answer: 0 },
  { question: "Which protocol is secure version of HTTP?", options: ["HTTPS", "FTP", "SMTP", "DNS"], answer: 0 },

  { question: "Which layer is closest to user?", options: ["Application", "Transport", "Network", "Physical"], answer: 0 },
  { question: "Which layer sends bits?", options: ["Physical", "Data link", "Network", "Transport"], answer: 0 },
  { question: "Which layer handles packets?", options: ["Network", "Transport", "Data link", "Physical"], answer: 0 },
  { question: "Which layer handles segments?", options: ["Transport", "Network", "Data link", "Physical"], answer: 0 },
  { question: "Which layer handles frames?", options: ["Data link", "Network", "Transport", "Physical"], answer: 0 },

  { question: "Which is smallest data unit?", options: ["Bit", "Byte", "Frame", "Packet"], answer: 0 },
  { question: "Which converts signal to data?", options: ["Decoder", "Encoder", "Router", "Switch"], answer: 0 },
  { question: "Which converts data to signal?", options: ["Encoder", "Decoder", "Router", "Switch"], answer: 0 },
  { question: "Which improves signal strength?", options: ["Repeater", "Router", "Switch", "Bridge"], answer: 0 },
  { question: "Which ensures secure communication?", options: ["Encryption", "Routing", "Switching", "Multiplexing"], answer: 0 }
]