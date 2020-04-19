package mostlyUsedmethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Loginandpasswords {
	private WebDriver driver;
	
	@FindBy(id="txtUserID")
	 WebElement userName;
	@FindBy(id="txtPassword")
	WebElement Password;
	
	

		
	public static void main(String args[]){}
	
	public void Login(WebDriver driver){
		
		System.out.println("kygy");
		userName.sendKeys("ImplementationManager");
		Password.sendKeys("pega@12345");
	}
	
}
