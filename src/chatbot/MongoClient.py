from pymongo import MongoClient

client = MongoClient("mongodb://donkw:donkw@ds155315.mlab.com:55315/heroku_37qvp4zk")

db = client['pymongo_test']

posts = db.posts
post_data = {
    'chatbot_story': "daniel picked up the apple there. daniel went to the hallway. john moved to the office. mary picked up the football there. mary put down the football there. mary picked up the football there. daniel journeyed to the kitchen. daniel travelled to the hallway. daniel put down the apple. mary moved to the kitchen.",
    'chatbot queries': ["where is the football?", "where is Mary?"]
}
result = posts.insert_one(post_data)
print("One post: {0}".format(result.inserted_id))



