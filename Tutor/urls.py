from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    url(r'^message_board/', include('message_board.urls'))
)
