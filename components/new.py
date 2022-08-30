import json
posts = []
with open("/Users/mehmetatabey/Documents/Feylesofya/components/new.json", "r", encoding="UTF-8") as file:
    post_f = json.load(file)
    for post in post_f:
        node = post
        categories = []
        for category in post["categories"]:
            categories.append({"category": category["slug"]})

        post["categories"] = categories
        posts.append(post)

with open("/Users/mehmetatabey/Documents/Feylesofya/components/new.json", "w", encoding="UTF-8") as file:
    json_dump = json.dumps(posts, indent=4)
    file.write(json_dump)
