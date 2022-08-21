from PIL import Image
from sys import argv
from pathlib import Path

path = str(Path(__file__).parent / "resources" / "assets")
image_name = argv[0]

img = Image.open(path + image_name)
x, y = img.size
img = img.resize((200,int(y*(200/x))),Image.ANTIALIAS)
img.save(path + "/compressed/"  + image_name, optimize=True, quality=80)

