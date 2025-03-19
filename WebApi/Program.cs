namespace WebApi;

public class Program
{
    public static void Main(string[] args)
    {
        var app = AppConfigure.ConfigureApplication(args);
        app.Run();
    }
}
