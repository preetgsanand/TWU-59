class diamondWithName {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);

		for(int i = 0 ; i < 2*n-1 ; i++) {
			if(i < n-1) {
				for(int j = 0 ; j < n+i ; j++) {
					if (j >= n-i-1)  {
						System.out.print('*');
					}
					else {
						System.out.print(' ');
					}
				}
				System.out.println(' ');
			}
			else if(i == n-1) {
				System.out.println("Preet G S Anand");
			}
			else {
				for(int j = 0 ; j < 3*n-i-2 ; j++) {
					if(j > i-n) {
						System.out.print('*');
					}
					else {
						System.out.print(' ');						
					}
				}
				System.out.println(' ');
			}
		}
	}
}