using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace post.Controllers
{
    public class postsController : ApiController
    {
        [EnableCors("*", "*", "*")]
        [HttpGet]
        [Route("posts")]
        public IEnumerable<post> posts()
        {
            WebClient web = new WebClient();
            string post = web.DownloadString("https://jsonplaceholder.typicode.com/posts/");
            var result = JsonConvert.DeserializeObject<IEnumerable<post>>(post);
            return result;
        }
        [HttpGet]
        [Route("posts/{Id}")]
        public post posts(int Id)
        {
            WebClient web = new WebClient();
            string post = web.DownloadString("https://jsonplaceholder.typicode.com/posts/" + Id);
            var result = JsonConvert.DeserializeObject<post>(post);
            return result;
        }
        [HttpGet]
        [Route("posts/{Id}/comments")]
        public IEnumerable<postComments> postsComments(int Id)
        {
            WebClient web = new WebClient();
            string post = web.DownloadString("https://jsonplaceholder.typicode.com/posts/"+Id+"/comments");
            var result = JsonConvert.DeserializeObject<IEnumerable<postComments>>(post);
            return result;
        }

    }

    public class post
    {
        public int userId;
        public int id;
        public string title;
        public string body;
    }

    public class postComments
    {
        public int postId;
        public int id;
        public string name;
        public string body;
    }
}