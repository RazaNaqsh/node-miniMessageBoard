const { formatDistanceToNow } = require("date-fns");

const express = require("express");
const router = express.Router();

const messages = [
	{
		text: "Moshi moshiii?..",
		user: "npc",
		added: `~ ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
	},
];

router.get("/", (req, res) => {
	res.render("index", { title: "Mini MessageBoard", messages });
});
router.get("/new", (req, res) => {
	res.render("new", { title: "Add new Post" });
});
router.post("/new", (req, res) => {
	const { text, user } = req.body;

	messages.push({
		text,
		user,
		added: `~ ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
	});
	console.log();
	res.redirect("/");
});

module.exports = router;
