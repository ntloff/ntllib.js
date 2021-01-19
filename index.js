// by ntloff
// my dc server: https://discord.gg/KHyy8d49FH
//ez funcs
function log(tolog){
  console.log(tolog)
}
function randomnum(length) {
return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}
//mineflayer funcs
function mfbot(ahost,aport,aun,av){
  let bot = mineflayer.createBot({
  host: ahost,
  port: aport,
  username: aun,
  version: av
})}
function lookp(){
  function (lookplayer){
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  if (!playerEntity) return
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos) // after lookp() func create bot.on('physicTick', lookplayer)
    }}
}
//discordjs funcs
function msgtonchannel(channel,namee,msg){
  let namee = client.channels.cache.find(namee => namee.namee === channel)
  if(!namee)
  namee.send(msg)
}
