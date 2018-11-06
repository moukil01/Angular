class Classroom{
	public static void main(String[] args) {
		Wilder damien = new Wilder(" damien", true);
		Wilder loic = new Wilder(" loic", false);
		Wilder kevin = new Wilder(" kevin", true);
		System.out.println(damien.whoAmI());
		System.out.println(loic.whoAmI());
		System.out.println(kevin.whoAmI());
	}
	
}