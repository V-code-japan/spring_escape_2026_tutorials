# エージェントをうごかしてだっしゅつしよう！
```template
player.onChat("fl", function () {
	
})
player.onChat("go", function () {
	
})
player.onChat("id", function () {
	
})
```
```block
player.onChat("fl", function() {   
    springMissions.setAgentModeTo(AgentStates.follow);
});
player.onChat("id", function() {   
    springMissions.setAgentModeTo(AgentStates.go);
});
player.onChat("go", function() {
    agent.move(UP, 4);
    agent.move(FORWARD, 2);
    agent.move(DOWN, 4);
});
```

## エージェントをうごかそう @unplugged
エージェントをスイッチまでいどうさせよう！

## ついせきモード
`||agent.エージェント||`を**ついせきモード**にすると、エージェントが**プレイヤーのあとをついてあるきます**。
このモードをつかって、**エージェントをとびらのまえまでうごかしましょう！**


