# prismagram

- Copyright &copy; 2020
- Author: Gidong Seong
- Licensed under the terms of the MIT License.

[Prismagram](https://prismagram-sgd.netlify.app/)

## 배포관련

- Frontend : netlify
- Backend : Heroku

---

## prisma

### 주의사항

**prisma.yml** 파일은 필수적으로 gitignore해주어야 합니다. (prisma주소가 사용자에게 노출되어서는 않됩니다)
**.env** 파일은 필수적으로 gitignore해주어야 합니다.

### global

```
yarn global add prisma
```

### User Stories

- ✅ Create account
- ✅ Request Secret
- ✅ Confirm Secret (Login)
- ✅ Like / Unlike a photo
- ✅ Comment on a photo
- ✅ Search by user
- ✅ Search by location
- ✅ Follow User
- ✅ Unfollow User
- ✅ Edit my profile
- ✅ See user profile
- ✅ See my profile
- ✅ See the full photo
- ✅ Upload a photo
- ✅ Edit the photo (Delete)
- ✅ See the feed
- ✅ Send private Message
- ✅ See rooms
- ✅ See room
- ✅ Receive Message (Realtime)

### 배포

```CMD
yarn prisma
=> yarn run deploy && yarn run generate
```

### 참조한 사이트

- [랜덤한 단어](https://www.randomlists.com/random-words)
- [메일서버](https://nodemailer.com/about/)
- [JWT(passport-jwt))](http://www.passportjs.org/)
- [random-key](https://randomkeygen.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [파일업로드](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
