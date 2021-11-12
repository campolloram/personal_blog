from django.db import models
from django.template.defaultfilters import slugify
from django.db import IntegrityError
from django.conf import settings

User = settings.AUTH_USER_MODEL

STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    title = models.CharField(null=False, max_length=120)
    body = models.TextField(null=False)
    slug = models.SlugField(max_length=200, unique=True, null=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts', default=1)
    

    class Meta:
        ordering = ['-created_on']
        verbose_name = 'post'
        verbose_name_plural = 'posts'
    
    def save(self, *args, **kwargs):
        slug = slugify(self.title)
        try:
            if not self.pk:
                self.slug = slug
                self.status = 1
                return super(Post, self).save(*args, **kwargs)

        except IntegrityError:
            c = 1
            while True:
                try:
                    Post.objects.get(slug=slug+f'_{c}')
                    c += 1

                except Post.DoesNotExist:
                    self.slug = slug + f'_{c}'
                    self.status = 1
                    break

        finally:
            return super(Post, self).save(*args, **kwargs)