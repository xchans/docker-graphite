From ubuntu:14.04.2

MAINTAINER xchans <a1221110@empal.com>

RUN apt-get -y update
#RUN apt-get -y install git python python-twisted
RUN apt-get -y install python-dev python-pip


#RUN git clone https://github.com/graphite-project/carbon.git
#RUN git clone https://github.com/graphite-project/whisper.git
#RUN cd whisper && git checkout 0.9.12 && python check-dependencies.py && python setup.py install
#RUN cd carbon && git checkout 0.9.12 && python setup.py install

RUN pip install whisper
RUN pip install carbon