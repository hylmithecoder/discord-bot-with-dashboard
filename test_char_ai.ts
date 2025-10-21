import { CharacterAI } from "@moonr/node-cai";
import { CAINode } from "cainode";
import "dotenv/config";

const CHAR_ID = process.env.CHAR_ID!;
const CHAR_TOKEN = process.env.CHAR_TOKEN!;
const CHAT_ID = process.env.CHAR_CHAT_ID!;

async function testWithWrapper() {
  console.log("Test With Wrapper...\nChar Token: ", CHAR_TOKEN);
  const client = new CAINode();
  const reslogin = await client.login(CHAR_TOKEN);
  const publicInfo = await client.user.settings;
  const listChar = await client.character.recent_list();
  console.log("Logged in!");
  console.log("Response login: ",reslogin);
  console.log("Public info: ", publicInfo);
  console.log("Char info: ", listChar);
  const conChar = await client.character.connect(CHAR_ID!);
  console.log("Connected to char: ", conChar);
  const chat = await client.character.send_message("apakah kamu bersedia untuk jadi bot discord aku? nih aku ngechat kamu lewat api pakai bahasa typescript", false)
  const responseMessage = await client.character.generate_turn();
  console.log("Chat: ", chat);
  
  const candidatesChat = chat?.turn?.candidates;
  console.log(candidatesChat);
  if (candidatesChat && candidatesChat.length > 0) {
    const reply = candidatesChat[0].raw_content || candidatesChat[0].text || "[no text]";
    console.log(`🗣️ ${conChar.chats[0].character_name}: ${reply}`);
  } else {
    console.log("❌ No response candidates found.");
  }
  console.log("Response from ", conChar.chats[0].character_name, ": ", responseMessage);

  const candidates = responseMessage?.turn?.candidates;
  console.log(candidates);
  if (candidates && candidates.length > 0) {
    const reply = candidates[0].raw_content || candidates[0].text || "[no text]";
    console.log(`🗣️ ${conChar.chats[0].character_name}: ${reply}`);
  } else {
    console.log("❌ No response candidates found.");
  }
  const chatInfo = await client.chat.conversation_info(CHAT_ID);
  console.dir(chatInfo, { depth: null });
}

testWithWrapper().catch(console.error);