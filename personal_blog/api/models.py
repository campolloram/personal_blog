from django.db import models
from django.contrib.auth.models import User



STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    title = models.CharField(null=False, max_length=120, unique=True)
    body = models.TextField(null=False)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts', default=1)
    

    class Meta:
        ordering = ['-created_on']
        verbose_name = 'post'
        verbose_name_plural = 'posts'
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = '_'.join([word for word in self.title.split(' ')])
            self.status = 'Publish'
