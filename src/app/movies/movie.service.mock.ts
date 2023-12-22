import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
    providedIn: 'root',
})
export class MovieServiceMock {

    private mockApiResponse =
        {
            "page": 1,
            "results": [
              {
                "adult": false,
                "backdrop_path": "/bqFO92d1idNAI4OOncUrduz2YoA.jpg",
                "genre_ids": [
                  28,
                  80,
                  53,
                  18
                ],
                "id": 10428,
                "original_language": "en",
                "original_title": "Hackers",
                "overview": "Along with his new friends, a teenager who was arrested by the US Secret Service and banned from using a computer for writing a computer virus discovers a plot by a nefarious hacker, but they must use their computer skills to find the evidence while being pursued by the Secret Service and the evil computer genius behind the virus.",
                "popularity": 37.705,
                "poster_path": "/r9YuMy9afzIOrumQzIKpKxv711n.jpg",
                "release_date": "1995-09-14",
                "title": "Hackers",
                "video": false,
                "vote_average": 6.335,
                "vote_count": 1167
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [],
                "id": 743617,
                "original_language": "en",
                "original_title": "Hackers",
                "overview": "A professional hacker talks about the public's negative sentiment toward hackers, discussing their overlooked track record in advancing the public good.",
                "popularity": 0.6,
                "poster_path": null,
                "release_date": "",
                "title": "Hackers",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/9c79SOvY1NnacoIOCGN2KOl4M2n.jpg",
                "genre_ids": [
                  99
                ],
                "id": 1165290,
                "original_language": "fr",
                "original_title": "Hackers : L’Intimité violée",
                "overview": "Cyberspace is more insecure than ever as hackers exploit human error and technical vulnerability to hold it to ransom for their personal data. Companies, public bodies, schools and individuals have all become victims of  cyber attacks. In this revealing documentary, victims tell how internet criminals have destroyed their lives",
                "popularity": 1.66,
                "poster_path": "/sjgvnITBedlfstYe7PjXJ1fLzjb.jpg",
                "release_date": "2023-08-22",
                "title": "Hackers - Identity Theft",
                "video": false,
                "vote_average": 8,
                "vote_count": 1
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  99
                ],
                "id": 550166,
                "original_language": "sl",
                "original_title": "Hekerji: The Hackers",
                "overview": "The documentary film depicts one aspect of the hacking scene and its evolution in the last 20 years. Who are hackers and what drives them? The film was produced for the 20-year anniversary of SI-CERT (Slovenian Computer Emergency Response Team) in cooperation with Sever & Sever Production and Slovenian National TV.",
                "popularity": 0.627,
                "poster_path": "/szVfz8eoPIzO7eyL9aNDJRiLQuA.jpg",
                "release_date": "2015-01-01",
                "title": "The Hackers",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/dkTEdyhvdW8bV4QXmDr2bh0QScO.jpg",
                "genre_ids": [
                  99
                ],
                "id": 530637,
                "original_language": "ca",
                "original_title": "Hackers 1-O",
                "overview": "With the closing of the first web of the referendum of the Generalitat, on 13 September, legal persecution began that broke the following weeks with successive legal orders aimed at blocking more than one hundred web pages, most of them private. Among the most controversial commands there is, which obliges the Fundació.cat to act as a censor by reviewing and blocking the contents referring to the referendum, among the one hundred thousand web pages of domini.cat that are registered.  The counterpoint to this attack is the spontaneous appearance of an unorganized \"hacktivism\" that responds by copying and multiplying the official pages and disseminating tools so that users can skip the blocks. The digital community rebels against what they see as an alarming attack on the neutrality of the network and authentic myths such as Julian Assange, Edward Snowden, Peter Sunde and groups like Anonymous add up to the cause.",
                "popularity": 1.098,
                "poster_path": "/b7sazkmV4EoISDDVKITdPgNoz6W.jpg",
                "release_date": "2018-06-12",
                "title": "Hackers 1-O",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  99
                ],
                "id": 1136246,
                "original_language": "en",
                "original_title": "Hackers for Freedom",
                "overview": "A fascinating investigation to meet activists and industrials who struggle to defend the free code, not only in the computer business, but every industry such as automobiles or agriculture. The film is like the logbook of an immersion trip to meet anonymous or public figures from the still marginal world of free software and its ever dominant \"proprietary\" counter-shoot.",
                "popularity": 0.6,
                "poster_path": "/5lnZrGtF1G0vGlPtOYxbrHNm1Ar.jpg",
                "release_date": "2019-01-01",
                "title": "Hackers for Freedom",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/8n5UhfBMhxyozgQbzLsHLIhxbKN.jpg",
                "genre_ids": [
                  99
                ],
                "id": 1195608,
                "original_language": "de",
                "original_title": "23 - Der mysteriöse Tod eines Hackers",
                "overview": "",
                "popularity": 4.704,
                "poster_path": "/7joxGt4i2RqZYfpSZD8yNkYpbqz.jpg",
                "release_date": "2023-12-07",
                "title": "23 - Der mysteriöse Tod eines Hackers",
                "video": false,
                "vote_average": 7.5,
                "vote_count": 2
              },
              {
                "adult": false,
                "backdrop_path": "/lQvgCGmF9GaI3Evz7ZhhN4wfMPL.jpg",
                "genre_ids": [
                  53,
                  18,
                  10749
                ],
                "id": 320343,
                "original_language": "en",
                "original_title": "Hacker's Game",
                "overview": "A love story between two hackers, Soyan and Loise. Like many other hackers, Soyan works for a company he previously hacked.",
                "popularity": 4.432,
                "poster_path": "/f4aDXyedcpVp14HixKrABOuMT6W.jpg",
                "release_date": "2015-03-06",
                "title": "Hacker's Game",
                "video": false,
                "vote_average": 4.9,
                "vote_count": 21
              },
              {
                "adult": false,
                "backdrop_path": "/3rt9Yy1IMa6UzSGVWWJqU07n8lB.jpg",
                "genre_ids": [
                  99
                ],
                "id": 666910,
                "original_language": "fr",
                "original_title": "Les nouveaux mercenaires russes",
                "overview": "Amid the growing threat of cyberattacks from Russian hackers, this film dives into their origins, motives, and the dangers they pose to their targets.",
                "popularity": 0.634,
                "poster_path": "/mxzZ4VjSym6e8pXevDJXTAHrWFd.jpg",
                "release_date": "2018-11-08",
                "title": "Tracking Russian Hackers",
                "video": false,
                "vote_average": 9,
                "vote_count": 1
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  99
                ],
                "id": 56416,
                "original_language": "de",
                "original_title": "Hacker",
                "overview": "They are passionate hackers and are constantly looking for new problems and their solutions. They live in what appears to be an infinitely accelerated state of data and information, to which the young Leipzig filmmaker Alexander Biedermann adapted for the time of the film. In doing so, he managed to gain astonishing insights into a scene that the “common user” would otherwise never get to see.",
                "popularity": 0.952,
                "poster_path": "/hnkXtAXX6BBf37opXBkrz2FpLEm.jpg",
                "release_date": "2010-11-18",
                "title": "Hackers",
                "video": false,
                "vote_average": 6,
                "vote_count": 2
              },
              {
                "adult": false,
                "backdrop_path": "/oRqMd6aZgcoEiKMAI4BoWJFyA0G.jpg",
                "genre_ids": [
                  99
                ],
                "id": 995460,
                "original_language": "ru",
                "original_title": "Русские хакеры: Начало",
                "overview": "Russian Hackers: the beginning\" is the author's documentary mini series of acclaimed Russian journalist Andrei Loshak. The film investigates this worldwide phenomenon of Russian hackers, it's inception in early 90s and it's growth in 2010s. The film goes through the lives of most prominent hackers of the time, following their paths of free crime, punishment and then awareness. It's a cats mice game of hackers and authorities both in Russia and the USA at the era when nobody thought internet crime existed.",
                "popularity": 0.906,
                "poster_path": "/byhCaa7Bcink7bV2sSwSrUaSl0C.jpg",
                "release_date": "2022-02-23",
                "title": "Russian Hackers: The Beginning",
                "video": false,
                "vote_average": 6,
                "vote_count": 1
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  16
                ],
                "id": 566059,
                "original_language": "ja",
                "original_title": "「ポンコツクエスト」×「デジモンストーリー サイバースルゥース ハッカーズメモリー」",
                "overview": "A collaboration between Ponkotsu Quest and the video game Digimon Story: Cyber Sleuth - Hacker's Memory for the latter's release on December 14, 2017.",
                "popularity": 0.6,
                "poster_path": "/6mCzGT3ODqCNTOsHnMvsSEeBMeb.jpg",
                "release_date": "2017-10-31",
                "title": "Ponkotsu Quest x Digimon Story: Cyber Sleuth - Hacker's Memory",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/6JeZtob4qeJQmTcA4wvvXdRSkz7.jpg",
                "genre_ids": [
                  99
                ],
                "id": 745510,
                "original_language": "it",
                "original_title": "I pirati dello spazio",
                "overview": "The '60s. Achille and Giovanni Judica-Cordiglia, two amateur radio enthusiasts, listened to sound from space with home-built equipment in their hometown of Turin. But one night, they recorded something quite different from the usual static that would change their lives forever...",
                "popularity": 0.7,
                "poster_path": "/yQ5DkaveqfYlitdfr54RkfT4QPG.jpg",
                "release_date": "2007-05-07",
                "title": "Space Hackers",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/rYZY3Q9L9tTy5xqVkDkvHJFIAGF.jpg",
                "genre_ids": [
                  28
                ],
                "id": 806900,
                "original_language": "ko",
                "original_title": "트웬티 해커",
                "overview": "A movie about a white hacker club 'Better World' and a genius hacker 'HEX' having an inevitable showdown with the black hackers as the Songdo International Exchange was hacked in the fourth industrial revolution.",
                "popularity": 4.272,
                "poster_path": "/yNCZyHoZpddbfwPvE7LA4f8Frac.jpg",
                "release_date": "2021-03-24",
                "title": "Twenty Hacker",
                "video": false,
                "vote_average": 5.9,
                "vote_count": 4
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  99
                ],
                "id": 1208666,
                "original_language": "fr",
                "original_title": "Obvious, hackers de l'art",
                "overview": "",
                "popularity": 1.218,
                "poster_path": "/6N8MehK4kKPU15XJ9sMb6KN7B2.jpg",
                "release_date": "2023-11-22",
                "title": "Obvious, hackers de l'art",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              },
              {
                "adult": false,
                "backdrop_path": "/2bO1MsGxw0yqSxuMVVIk5s4I8nr.jpg",
                "genre_ids": [
                  99
                ],
                "id": 341390,
                "original_language": "en",
                "original_title": "Defeating the Hackers",
                "overview": "Exploring the murky and fast-paced world of the hackers out to steal money and identities and wreak havoc with people's online lives, and the scientists who are joining forces to help defeat them.",
                "popularity": 1.967,
                "poster_path": "/ylezrZHKJ4yk9y0JzyJfkzJhwJk.jpg",
                "release_date": "2013-10-26",
                "title": "Defeating the Hackers",
                "video": false,
                "vote_average": 6.3,
                "vote_count": 3
              },
              {
                "adult": false,
                "backdrop_path": "/k2H0HqLdp71efqx4nMddRE7l7VX.jpg",
                "genre_ids": [
                  35,
                  80
                ],
                "id": 1016708,
                "original_language": "en",
                "original_title": "Bikini Hackers",
                "overview": "A group of women hatch a detailed plan to take down the top global financial systems. They will let nothing and no one get in their way.",
                "popularity": 7.239,
                "poster_path": "/jE8PHhIVQotajOBPSEpu2UUPPGz.jpg",
                "release_date": "2023-02-04",
                "title": "Bikini Hackers",
                "video": false,
                "vote_average": 3.6,
                "vote_count": 5
              },
              {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                  99
                ],
                "id": 606061,
                "original_language": "en",
                "original_title": "The Keyboard Cowboys: A Look Back at Hackers",
                "overview": "Brand-new interviews with director Iain Softley, cast members Fisher Stevens, Matthew Lillard and Penn Jillette, costume designer Roger Burton, visual effects artist Peter Chiang, and more!",
                "popularity": 7.641,
                "poster_path": "/aebl0Zp2Y6EmM2SksM40vD3zqJl.jpg",
                "release_date": "2015-08-18",
                "title": "The Keyboard Cowboys: A Look Back at Hackers",
                "video": false,
                "vote_average": 10,
                "vote_count": 7
              },
              {
                "adult": false,
                "backdrop_path": "/5SXMABNJxaGs4dnqNAMAvB8d659.jpg",
                "genre_ids": [
                  99
                ],
                "id": 93633,
                "original_language": "en",
                "original_title": "Hackers: Outlaws and Angels",
                "overview": "This program reveals the daily battle between the Internet’s outlaws and the hackers who oppose them by warding off system attacks, training IT professionals and police officers, and watching cyberspace for signs of imminent infowar. Through interviews with frontline personnel from the Department of Defense, NYPD’s computer crime squad, private detective firm Kroll Associates, X-Force Threat Analysis Service, and several notorious crackers, the program provides penetrating insights into the millions of hack attacks that occur annually in the U.S.—including one that affected the phone bills of millions and another that left confidential details of the B-1 stealth bomber in the hands of teenagers. The liabilities of wireless networks, the Code Red worm, and online movie piracy are also discussed. A Discovery Channel Production. (51 minutes)",
                "popularity": 1.522,
                "poster_path": "/3h5ZwhDx0mzzdkFJpKLB0ZLrIaq.jpg",
                "release_date": "2002-10-13",
                "title": "Hackers: Outlaws and Angels",
                "video": false,
                "vote_average": 7.7,
                "vote_count": 3
              },
              {
                "adult": false,
                "backdrop_path": "/6OlV5xf3NaqwK5JPjkZCESmcY0p.jpg",
                "genre_ids": [
                  99,
                  10770,
                  35
                ],
                "id": 1061962,
                "original_language": "en",
                "original_title": "Hacker's Birthday Bash: 30 Years of Children's BBC",
                "overview": "It's 30 years since CBBC started airing short links between shows. To celebrate, Hacker has brought together the finest presenters, past, present and even a new one, to reminisce and laugh at a few bloopers.",
                "popularity": 1.609,
                "poster_path": "/yz87TgZpFKff3naKpnxsc2pe39o.jpg",
                "release_date": "2015-09-09",
                "title": "Hacker's Birthday Bash: 30 Years of Children's BBC",
                "video": false,
                "vote_average": 0,
                "vote_count": 0
              }
            ],
            "total_pages": 3,
            "total_results": 55
        };

    getMovies(query: string): Observable<IMovie[]> {

        const allMovies: IMovie[] = this.mockApiResponse.results;

        const filteredMovies = this.filterMovies(allMovies, query);
    
        return of(filteredMovies);
    }


    private filterMovies(movies: IMovie[], query: string) : IMovie[] {

        return movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()) && movie.poster_path !== null && movie.poster_path !== undefined);
    }
}