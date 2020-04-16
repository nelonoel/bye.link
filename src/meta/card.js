import get from 'lodash/get'

const cards = {
  visa: {
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATwQAAE8EBqmamwAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQhSURBVHic7ZdbiFZVFMd/01iaGV4SiaaxQRJJixQpNS9gF2ESqhEhLSUwLXywKMN60DBfxAtegilNIp8sySBfNMTLgJkpqXh9iNSpEdRPZMbSdLRGH9Y+4/72WXt/px5r/WDznW+v/1p773X27YBhGIZhGIZhGIZhGIZhGIbx/6EK+BB4NKFpBzYBmxOae4AFSv1mYC8wCngxsLUAjZF4dUAD8ATwENAT+AMoAc3ALmA7cDniXwVMBIYCPbz6ErBCcxgAvA+cAm4qpQN4KtIYwAzF5wbwoLMvV+xfKnEeRpLWEemHX6Ym+rMq4tMOdEv4cQcwGfhZcV6c8NtTYYDfKfb5QYxngEuRjmvlsUhfBgJ/J/xGJ8bRST9kSt/wHLdHtIMLNHRGsb/k2euAtgoDDmdX10h/Giv4zq00eIBlwExk2pecYxsyQ0JWKI0c8Ow90af0QE+zVrFfAz5CEvkIMBZ4BViPzDiN3shekUrA1wXGT70TN7rGW9z/QYGuK3BBaeQ1TzNasf8JVHuaFkWzMNE/7UUAzIu05f8/k4jbyd3AFeewAVlvl4Bpge5lpcES5RvNm4rmpyDOdUWzDbizSGcdXYDfghhHgG+U2LWZUyyTV4Gd7nkq8DYwBzmWfF5XfNcg0zdjiKI5HvxvVjTPAYeBFyJ9DJmMNzDH58A+RTuySMDZlGdtDrDIs9eR322vAzVBnB3k38C8QPOOovFLE/nkh/wY+LQDfYFxSjz1LhDSXxncq9yelouUwBuUOOcV3fOBphrYqOj80gGsRJ+12j6THcPdKT/NbgI/FEkAwNHAcR+y1qqBX5VGw6nVNzKY/kpbVcB7yPJLJeILxXeTonvWsx8MbNeIH6NlLFYCNyDXzLB+v+I/XtH97gYboxZYh74xZmW8p68j/4ZPUz5TPlFijIT4JpixRalrQO4IIauVOm0DPOY6EKMFmIUcv00RzUTv+S1kVvo0AcOA4a5cVGIU2gi7OGc/cxfJv52zwF2K/6fkM7+uSMOObuh3hGyvuZd/doP0y1dQeQb8hZzHPn3In89rkKSEaF+Z/hE42MWLkXU2pNn9zkRumv+GUUWF00lnsh24P+Ibzp5wc1rr/LcAbyA30MeRpTMF2XS1NkcgG/HJCn2rVGrCtaOxFTnvqyP2jcA5pb4G/e0e856HIEun3pUifIskZhLyGe9zGbkPaNSSv8qPKNgme4ln8cmIzwRFG25GrYm4WtkN9HK+3yv2jxNjqFf0SyuMu5P5kQ6lLhTvKvomz94POY+LDLwV+IDbZ/fwiG5Yoj+9yN9cdxdZAiC3qh5KvXZMZvwCLAnq/M/kEnAf8DQwBngAWTZZYkrACeTTdyvl3xcDgM+C2K3AoUR/2pA37i/Lqwm9YRiGYRiGYRiGYRiGYRiG8Z/jFvd8GjKITXFEAAAAAElFTkSuQmCC',
    size: 'contain',
  },
  mastercard: {
    icon:
      'data:image/png;base64,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',
    size: 'contain',
  },
  'american-express': {
    icon:
      'data:image/png;base64,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',
    size: 'contain',
  },
  'diners-club': {
    icon:
      'data:image/png;base64,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',
    size: '55%',
  },
  discover: {
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATtQAAE7UBcYZV5QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPrSURBVHic7dlfiFVVFMfxz3UyQVTKmkAlgjSZEtShHkJTykKJ6A9F9JBRUST0YPZiQSARFFEYBpUSUYH9L6qHimIiUgbR8qGhwkok+6NkqWCWWubcHtY+3ePx6tz8N864v7A55+y97j57/fY6a5+zL5lMJpPJZDKZTCaTyWQyJxk1vJHO/8Ev6MKHqKf6Z/AHFmIE7sclyfYlvFfq72LcjanYmfp6MLWdgQWYg3Z8i+fwFmbjTryKd0r9DcML+BVLS30VrMa7eDxd78F6PI9ezMLLfYlQxy78lESo41Oclto34+t0/nZqX4k12I6zUts92Ie/8Dk2aIh4Hr5P19WyNAmyB19UxnZzslmEGel8K75L5UlMSfUbsTY5vg0dYkL6pI6P0vkoPJvqisgoBBiGvcnxgnPTcVpyfh0mlNrniihbdRDnizIXr6TzC0u/X4m/MbYkwKLK+AsBiihYkK7nt+I8+wsAbWImetONCwFq+E3M8MMaM680+JlN+p/u0M7XRSgXDi5Lv+tIYyhCuGh/Ojk9BWOaCHBbur73cAWAxan+cvs/ArPwQ2rbjUeFYD1CmFOa9D+vBQH+TLY9IneMxJLUNq0iQLksLgnQI3LSTjFRY1txfshB6tvT8fdK/ScYj5vEM34fbk8OnCqSZJVdLYxjdzouS33ciltEJK6q2L6GG1J5sVR/usgZ3whRNrdwXxwYAeOF4z+L2S1HwJiSXTEjS/BQOl9Y6bsNZ2sk14OV5cl+JHYI0eq4o8n9DpUDXhe5aHYLfv9HXWTP6/GAWN724brUXggwQwgzH50i3IpBjsaPydEncCmuworURxHOzcoOsUoUPJXqt2N4EwGW48pUplYEODONf4sWH4FCgHLZgGtL7YUAo9Bdse3C0GQ3AZ9V2vemtqEiee2rtG8USbLM+SL5PVapb5YD3nRgErxGYylv68v5msay0yveBbZWbDrFzH6ZOpwpHpP1Ypmql2xruAiTRBivELNRdm6OCPWv8IFInlXm4X3xGBaMxAUVu23YlOq3lOyniIS8Tms5KJM5San19wD6k4n4uL8H0R8MxyPiG6Peh+2gYghuFEtveSk9KbhavMs0exEbtNSE46sd+jV80DFEOL5W31+hg0qAEbhLfA224vigEWCi2JfY5v85PqAFKMK8S3zDHI7jA1KATvHVt8mROT2gBDhH7Dytc/ScPuEFGCe22bsdeYgPGAEmiZnuduDGyTEr/fk11C52ma8Q21vj+mMQx1OA0WKL+zKx3T75ON+/KcdqAG0af01NT8eOY3i/w+ZoDKgm/iLrLJXJ9t/RzWQymUwmk8lkMplMJpPJnCj8C8sExQOihreyAAAAAElFTkSuQmCC',
    size: 'contain',
  },
  jcb: {
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAbvAAAG7wBureguwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARBSURBVHic7dpdiFVVFAfwX7cxTfq07ywryqIyqSyCotIySXooIqgwAgv6gCixwIeKiCjoIaIi6iHoJbDXiCJNIoq+hSLoy0kcpZSspkxrGka9Pew7w53T2cd75u4zF5nzhwP3nr3uf+/zP2vvvdbalxo1atSoUaPGVMUBOffOwt24GieX5Psc10baTsVdWILTIn3H8BvOjLQd3+JdijNwYAnecbYH4VnsRnOC10eRTh7HcBe8v0Qe4AHs6oK3OUo0HWu6JMoToIHVCXjzBHguAe+YAC8kIssK8HAi3qwAdybibcJ52FOBALMxVIEAh+L3VAI0cI/gqqmxHDMq4L0Zs1KRNbAwFVkGV1bEuzAlWUP5ra5TzKmIN+l4G8KcqgL7BW8Vc3+/Qi1ArwfQa9QC9HoAvcaUF6CvR/3+K4TJf+JgIRk7XA9eSFkBnsGGSNtTkfvDQqb5Lr5APwZz7BpCbn86zsGFQtSXrQOswhElxjytxXk9FuQZlEkeFhZ0tMn4ZGgAT+OYEoPN4kb52eBEsVym3lHlFFgi7i19gpgLcCRGBK/4Bp9gZ4l+LsXMtu9NrMeOHNtXMR8rZH5QhQfEcB02F/QxjLdxA26ybw/oz+HYhhMj9ldkbCdVgKXKldx2mJgATdwRsb+s3W4yV90GXlSuaHnYBPtqCtMpD+OKtpO5DS4QqsGp8TqObfu+B2/isxzbq/Bg+43JFGBuRbyPdmBzAVbiVhkPnCqR4JdCCX2lTAxSVoBmQdu+Djr6S/bVKfIWwa3CNtyOQTyPS4Si6hjK7AJnFwxkUPEu0BB2im6rwlnEdoFYDEKIJsd2gbyAIQ/f4ftI2xwhoCnCXtwnLFKd4ucStlnMLGhbP/qhgVPwEL4t+MF23CY+BWJ7bhZvCTH55gKbXXhNiPBWdcibxQgeK2g/evRDdt7OxeU4F0e1iL5qDSjmKRfhAyGr+1gINEa5YvN+GhbhYqHIuRc/4WshYRpu2S1r9b0dx0W45gnZZDu24NeIPazFNQXtHaEhJBej0VrT+DWgXzi/m91FH8ukTYZmyBwD9uF9fCqov0FQb3uEYJaQni7G7Yr39mm4H/cKrr9GmHsb8FeOfQMnCKnwPMGzFufYLdLmwh1iOs7HLXJeSN4KOiKIsLF1bdPZOV82HY7Z7RRcdKPg+oPCNOhkF/iwg3F0fMUiwT4hj+8mly/CIa2r7JtMjqkSCUZRC9DrAfQatQC9HkCvUQuQmO+fxHyjGKqIdzi1AFsS81XNuym1AOsS81XN+x7pwsqtxv8rbCAR7xBOauNNFQrvwfyUHrBCOPRMjSeFfCE1XhISwCRqPpHTwUAC3tX+v1Cn8IB12ry1G6JB8WpQNwIM4ZGch+9WgBHhD+FjBZQ+/BF5gBh24we8gVeEM/487CjJ3RTS43fwsrCmpMDfQjF2reD2PybirVGjRo0aNWrs5/gPnyu1qRON7qcAAAAASUVORK5CYII=',
    size: 'contain',
  },
  unionpay: {
    icon:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAaLQAAGi0Bo2K/hQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAb1SURBVHic7dlrjF1VFQfwX6edUspDsAK1JghDIS2IpbQWEME2tkW0YmQKmn6AGKRKxIhRoxLFByqIUYOgRPCRBp9ILCTGKA8r0c60pR2MsbUlLbbUIEWKbaOt1sf1w9rHe3rn3nPnnjvTmHj+yc49d5+91t577bXX61ChQoUKFSpUqFChQoX/R4zrYOypWIwzMakDuifxK5yCV+IlHdDmsQcP4UTMwNSSfGAXVuKJkQyehLtwELUO2l5chbdhZ4e0je12XIktXfLJt3/hinabn4xflGD+Z8zFdfh3lwv9APpLHMBI2pZ2Avh4ScbvRd8oLPpRHI99Y7D5Gg70tBHAW9tJqAXuw1vQW5I+ww/wBhzTJZ9WeKpIAFOEsekU2/BHXFhqSYdi9SjxaYWBIgG8WmdeIsNg+r2gBG0ee/C7tI6xwmCRAMpuYBCn6c5NZXyOwiu65FOEQg0oK4ABo3NqgzgP40eBVzPsxpZWApgg3Fin+At+q3v1Z/QE2QqDqE1o8XIWjk7PG3Ev5uHy3JhPY3/6zQQ5UfjWbtUf7hAR24Zc3xQRUY4G1hS9fI+6r/xs6vtiru95YSBnGhv/XMP3Wqxt+SjxX0D95BqRV+HH02/+SqxPTF7Vgj7DNXhXmzGtsD793iZygK8Jo3iPuGrd4J9YR9z1ZsjfvceFITq3oY/2AjhVJE9lkM1xtUiACC3crvsA6zf4a6uX09TV5JnUd7ZD1eey1L8Gn8drsAwvFglQTUi4TwQzNfxYCPE4Ed29IBKSM4WWzEhzr0r9xwhbsi21O9Kcy7ADn8F3MYQvpDG34gwhvF+m+R82XP0zXk2xNDfwwdT39gYGU4XBO4BLcRJ+mGjHCRX7Unp+IS1mAm4RYfIR+CQ25Tb1k8TzfcLwNsO5ieYEkSOcrx6s7cLH0vOjaS0zhTAbBbAsY9jsCuTVfyg3cYan8Kzw0ZOElb4+TTiEl4srs1acxvHihF6LDyceN+K5RDtepNtHCZvUp37/lyW6ccL6vw6fwp/wc6E9UxPNiUkwsBUPYIXmdm6gSAB5A/h8btPEiX80t7idaSPzUt8TmJOe1+Ki9LxePffekfgtEIWSmThWnPrfEn3mAa7F/Ib1rRbCmp/o82vOBPBlIZRmydwzwo40xST8XV1V7s+9OyUtFBalcSvT/+fS+BPE3dyV+r+S+heL+32zqApdKFLli4SRq4nTmiCM0wXi5PYarr6XCY24RQiPuNM1PJJb74omtI17GqYBc8U9zNAvgqCVIsObiyXi9HsTw2vSxveJU1kkCiLL0zPhum4StuByvD/RT8eb05jxooAyGadjtrrA87gNL01zLxXCXpjeZeW26XL3vAEDLfrBB41dYHM42oq0j28VjDm/SAAr/wc2UbbtF/f+bOGFmo05IDxQSzw7xoscEkbueuG3d+EduBgfwVlpE334XKJ5MNFcJYzanNT607gNwlb0i+s7UDB/ZjT/i7yLOE3487HCKuEJNgmfvwhfx7dFrDBb1CDPEl7inES3VWyyVxi/DeIUZ6VxNwvhbU58izLRYfc/bwTHMvWEp/F6Ybhmpb51wvUdFFHcHuFRjlR3oTuEgbxRPdC5UhjldwphHCmMc7vvFYNFL+8yturfWF88Djek5/vFlVgrTnlxju4M4Q1OT+96RHi7XF1LFqT/G9usoVDDfz3GAjgo4vv5ub5ME/LoFYFQTag/ETZvS8/zxLeK+0Q0SsQEP20zf0bfFMdqbTlHo92Nk3Nz9eGb4kTfKGL3hSKQuVbc8xruTDSXJhoinlgkbBYRCs/R3oXfWySAhSU3tg4fEtFb0bjtworD90VofHf6fyd+lJ6niUwx+xCyRARZD6try6D42nRJ+t8v6nvt1npdkQBuKimAGxyaPhe1eaKklWVnV6e5n8R30vNjufFDIuafIQzkZGEMd4pMk3rF+KERzJ/Zi6Zod39atfMcmj4XtV7hdWaJ732ZSr9bfAEi8oQH0vhvCLd5hcgCCYOYVaaWpI1LPIvm3qdFdTmzqruFVe4EBxLNrSKHb4fN6lWYk8SJ7hHF1ynCgv9DxPEvaqDdKwziNBGsZfXIiUIjjlBs4R9Rz0uGobHaM9L2WKJfU5L+cLZPtNp8j/I1/DUi8Jhdkj7DdhHY7O+STxFalsB7lI8AV4ui6MR2A9tglTB4k7vk0wo1EWA1RbcaUJhaHmY+rbBR1Ceaokc9oOgE+0TMPr3kovLYWnINI0VhANSjHm52gqNFCfzpMitqwMmjxKcZNosPKoVYqlwY/FURpf2+BG2+bRIlrtHORQaN4DtiVlM/RxQbX9aOoAEDos73JhGktPrS1A5/ENWoi9X9e1nsTmv6mQiZK1SoUKFChQoVKlSoUGEY/gMVFc3Ivz5h3gAAAABJRU5ErkJggg==',
    size: 'contain',
  },
  maestro: {
    icon:
      'data:image/png;base64,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',
    size: 'contain',
  },
}

export default key =>
  key
    ? get(cards, key, {
        icon: `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 20 20' height='20' width='20'%3E%3Cpath d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'%3E%3C/path%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E"`,
        size: '45%',
      })
    : cards