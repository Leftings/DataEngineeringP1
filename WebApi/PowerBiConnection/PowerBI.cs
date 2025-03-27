namespace WebApi.PowerBi;

using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Identity.Client;

public class PowerBi
{
    public static async Task<string> GetAccesToken()
    {
        var app = ConfidentialClientApplicationBuilder.Create("");
    }
}