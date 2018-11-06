class Wilder{
	private String firstname;
	private boolean aware;

	public Wilder(String firstname, boolean aware){
		this.firstname = firstname;
		this.aware = aware;
		}
	
	public String getFirstname() {
		return this.firstname;
	}
	public boolean setAware() {
		return this.aware;
	}
	public String whoAmI() {
		if (this.aware) {
			return "je m'appel " + this.getFirstname() + " et je suis aware";
		
		}else{
			return "je m'appel " + this.getFirstname() + " et je ne suis pas aware";
			}
		
	
	}
}