import java.util.*;

class Factor {
	public static void main(String[] args) {
		int n = Integer.parseInt(args[0]);
		PrimeFactor pf = new PrimeFactor(n);
		System.out.println(pf.generate());
	}
}

class PrimeFactor {

	int n;
	PrimeFactor(int n) {
		this.n = n;
	}

	public boolean isPrime(int num) {
		if (num < 2) {
			return false;
		}
		if (num == 2 || num == 3 || num == 5) {
			return true;
		}
		if (num%2 == 0 || num %3 == 0 || num %5 == 0) {
			return false;
		}

		for (int i = 7 ; i*i <= num ; i += 2) {
			if(num%i == 0) {
				return false;
			}
		}
		return true;
	}

	public ArrayList<Integer> generate() {
		ArrayList<Integer> num = new ArrayList<Integer>();
		
		for(int i = 2 ; i < n ; i++) {
			if(n%i == 0) {				
				if(isPrime(i)) {
					num.add(i);
				}
			}
		}
		return num;
	}
}