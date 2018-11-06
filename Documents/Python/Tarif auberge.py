age = int(input())
poid = int(input())
prix = 30
if age == 60:
	prix = 0
elif age <10:
	prix = 5
else:
	if poid > 20:
		prix = prix + 10
print(prix)


