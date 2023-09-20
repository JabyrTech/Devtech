school = dict()
name = ['jabir', 'huzy', 'jabir', 'sadiq', 'jabir', 'jabir', 'jabir', 'jabir', 'sadiq', 'huzy', 'jabir', 'huzy', "huzy", "jabir", "jabir", 'sadiq']

name = name.append("jabir")

for i in name:
    school[i] = school.get(i, 0) + 1

name = name.append("jabir")

print(school)
