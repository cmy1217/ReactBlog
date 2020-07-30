import {createGlobalStyle} from 'styled-components'
export const IconFont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1595377787152'); /* IE9 */
  src: url('./iconfont.eot?t=1595377787152#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAcYAAsAAAAADiwAAAbJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDegqONIt5ATYCJAMkCxQABCAFhG0HfhsTDMgekiRIQAEFAAo4sCiKB/6Pfd0XP9NmKBMjMWnOAEUvWNO22AouLsja+jZg/fBu2guhliA1YHNmVp9YXSMTQxKaCtCQtpsnm0O/rqJTMTpxvxj4n3t/+je1ps3btg/SCTDBgP6cmxobowkU0FiDXhZ+wIZLmHmLeS3tCdWITH7pYQKqRvWG7CemE+AtY5wACbecxQDePqmc0hiUBcWYCzOE9+ChHOfJzgF4Z/58+AVhwRtEhQTsxJPzBDNEf/V8kYOK/4tG6SigVafGbTcS5oB847+M1b4A1GbPmdxq3AlyZ0BTWVT8yg9XP9M8G/C89kXO///xE/qVQmvQRHdpQ9OWFKv4x0sKhCIwbh3wjzjlyaTJUQJf1aNkvmpGKfG1HweO1x+oxXgDYJTIt9pREt9zqAuupaKnd4FxEM+J7A+wmnXsIh3alET5U7GhUqlVfQL9FT6+IFLoBYKKln5+3t4aXN1CqzBVVQVCdbWrFkGkGrpmxbI6TWg17tLVNmrp1Bqftl6TchU1FN1UgSFVQKGscLBSyVV1j/un1TY2rJjk66wSqzVK+HyNuH6dbG6m3bHVcDaHGtxuKiSttlZHK9VLpZpJ1BJ3IrXiVHfzPnEoud8VZVm7lTCvcvak1ki9aBpOLt/fkqwzJpAvIQelyANOEnY5IB107RcLMeeaVn7TWhx3rQZ4smqYfyw+sQaqfvM47HhjbJlYzZqbWVzFqW4oD7UOr/a5MUyu9iC0bwzIn6waoyrWrFNXT5k0jTdyj8Orq8WqQKymRqo1VDm1FFTpnTUIQpwi6eja5RqyWiwn9l+HHGaEIJGrRXJTlDdCvJ5DH3A/qwHUVUpBYIX48BE17bCmFsMMe3EXQDVghzDnBUSiaQlzDiG3rQJxNe46iiA0bQmmJQmjaqqA6JvJus76rZedaaUd2dDaoqMb1+7c3oXcfb33JOpgMzLDtNamu5qjyGrXWolvjOylLj3CP8M23cMisXu6d3gk/u5mj5T4nnEpTyerPU0ziWHLdmZWRSyNmzUm10s9OSVuYsnrQ4Y/TY6vyvNSVTxNidvbNGZWXkqFyit3THXc0ojQLZFp+Dvtu0VZhcmt6cmQFfNdFfkIh+gk+yRIfTM8rk348A+Dkdxia55iIYQEu0LsAfOJb/KCx58WFUIQBi/fUlztEBvrf1WxqUOnWTOGMdSDh2aLeebMsLDcFrNnh4WHPXzcKbzTbP+7tXUrSnx74NfaZCxOZJME1pzEJprZMevCwsvCy8Mt4TDPgav8VMWSbupjFVkeOsiPZ/8nna30U+LKP73ZmXmlWR27lx5VeMivtZ+yUKmr0V03InoPKf0ufQy7LNaJZpU96NLMS37KQxKlMhGNsm8EUOgJoF9ttRF98UK+Ub7hxUvi2oC+fIECa6NOFHz9m7jHf4+4Q8CXMk0ZSdzxXuOe4nOHyivXvNOwUyaWR5epWwTC733Dh98NdsTI5mzbNkcWPY19KXq//M+fvH9k3OLf033T/0dVFxxiky53j7/MqP43xrkLIrNIWayRi2yW/450CMcHBCMeMUG2HhSnHI2nRQ96MoYWzrbU/G7V5WOXdvBXscAuO+iKGIHIkLmZ4Bts5ANaPr8/b2vK7caSHW0m6Vrg2q2tXqSEj1j8vaC05ZyMRE1mAgx8r92xw9pTiEXrz52rVyz0KkPrXVOs0PNZ/E5r2pJt/6yUTVy6dCJlyagGnYhSskGC3WHSEwD+H0yH0Biz+8IOtG/36wq0Q/f9RWhr9v9paOiW0nB0iv/GMrTd8eIgH/5znxirHvLVGz+FrPkydPVEmvVfzJCeAGzQPGja0YGGnJK/DMau/OZFUgv0VvwGlTuiypdwXDB23auWP0DTDkL8gQtRyQgkZWPojJ+Dgpo1KCrbgqpZSZfX9PBQIfsAM2ZpELRthKjpIyRt50lAAvxdKBh6C0XtgELVaQi4Yc1E4LA4njEIjFlvnKDnTDYrKxQCZiXmMpbSIgPvZZhdFMM7OIc+NCgkGEhirAxfxSmOMkuYILB6lrcV6xO1xzFFRTa9nbcVMCYhKF8Q7IOCg9m4U4NMtmLA7OExDAR9qJme0QRijomNFbu6AAt9fy6GRakiBnxKxQ8xhcFz4LavFypICAKdxLWiKnYl3aGMRRiBqFl66ebZFNv8RKpmFHGvjZ49fr8CDBNBkPwCbrtBgslMLJYb1Dy/eF1vgSqGRCXIEBSRIx6IJ+KFeCM+CAa1y1KD1cxYLXaDzdvIKVaJfJNVznNFnCK/lDMbbGbOajGWyh12ziqLMShm7NQ+pnzGVMhZMdZgtZgNBakSAAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1595377787152') format('woff'),
  url('./iconfont.ttf?t=1595377787152') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1595377787152#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

