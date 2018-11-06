nbMaison =int(input())
Xmin = 999999999
Xmax = 0
Ymin = 999999999
Ymax = 0
for loop in range(nbMaison):
	X = int(input())
	Y = int(input())
	if X < Xmin:
		Xmin = X
	if Y < Ymin:
		Ymin = Y
	if X > Xmax:
		Xmax = X
	if Y > Ymax:
		Ymax = Y
