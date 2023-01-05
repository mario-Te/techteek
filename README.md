a.edit project confugration:
1. composer update.
2. php artisan migrate to build schema into the server.
3. php artisan serve to run the project.


b. how to use:
1. user can register to the site using the registeration link in the top-right corner in Welcome view.
2. once user logged in it will be redirected to addpost page.
3. user can add text and GIF as many he wants.

c. links are:
1.http://127.0.0.1:8000/article/{article_slug} to view the post. (public access)
2.http://127.0.0.1:8000/addpost to create post. (only user)
