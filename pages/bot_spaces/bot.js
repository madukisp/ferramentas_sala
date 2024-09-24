const app = new Vue({
    el: '#app',
    data: {
        message: '',
        status: null,
        unitsCapela: {

            // "Amanda": "https://chat.googleapis.com/v1/spaces/oGTnrsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=DRl5KWwAUFu2QzU8Bzc9cxhctu6vg4nQkfow462ommk",
            // "Eduardo": "https://chat.googleapis.com/v1/spaces/vSWZikAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=lhDV_KI7q_GzvNXMbyQbwcrKW7CVbwN1pdez2dBSQDU",
            // "Marcel": "https://chat.googleapis.com/v1/spaces/nnshrMAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=yF7ci9XxcDc-F1J0vEveyhKlgrwi9Nt45pggOhTO5ww",

            // # CAPELA DO SOCORRO
            "AMA UBS Jardim Mirna": "https://chat.googleapis.com/v1/spaces/AAAAIxS6RLI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=bdBniBqqHv6Y6jBfuKwaToEuAQT-6MRftEzgShVFPJE",
            "AMA/UBS Jardim Castro Alves Dra Maria Cristina F": "https://chat.googleapis.com/v1/spaces/AAAAZP-VfGY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=5oRtCZgsIYOe81-yLDTFcLEDlX1rzSzQHOVquZ46d-g",
            "UBS Alcina Pimentel Piza": "https://chat.googleapis.com/v1/spaces/AAAA70LBePM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=NgXSXHv4zuxkf5IQX3yR_y_f636-CNp4iJWc5AMRij8",
            "UBS Anchieta": "https://chat.googleapis.com/v1/spaces/AAAAV0ZBL_8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9Wm5PIoEdTiq1JycBflt_3pnvdQ9AUO9mPBgboBOgmQ",
            "UBS Autodromo": "https://chat.googleapis.com/v1/spaces/AAAA7-2TgTU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UHAd7rRrlri8FgDI9qNApzcqf2Ytk62FoAX2QFjfP3U",
            "UBS Cantinho do Ceu": "https://chat.googleapis.com/v1/spaces/AAAAqULsHRQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=vy488RoXUECdxlJNTqQ2w5Q4D3FHsu--YREron6sT1Y",
            "UBS Chacara do Conde": "https://chat.googleapis.com/v1/spaces/AAAAZ-lcXZg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=EZ_Cgt8ee5epSZivrRW5S86w3tZ80cQO1mUm48GeMvU",
            "UBS Chacara do Sol": "https://chat.googleapis.com/v1/spaces/AAAAt7ocZWY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=PYTETjO8YuBtx4dQqGjkleprqgZ7zMKJlYgLal7aBBs",
            "UBS Chacara Santo Amaro": "https://chat.googleapis.com/v1/spaces/AAAALHEtorI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Q9CvkSqO5uHQMPSQ9j4kYBro7LdJLKw5pCxJXLIvbfQ",
            "UBS Dr. Sergio Chaddad": "https://chat.googleapis.com/v1/spaces/AAAArsc5ZLc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=E25Rple95QIm5nH0gp5MWctavpsaYaQbCBccUirVx3U",
            "UBS Gaivotas": "https://chat.googleapis.com/v1/spaces/AAAA5jFhycs/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=A2NRYbb0Y_QtrzVqPuvhxF78A2oDk5xRDw6vBFGy5DE",
            "UBS Jardim Cliper": "https://chat.googleapis.com/v1/spaces/AAAAQIOn7Vg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=FhfY-ZnX9SESYC8xlT0fSUzjlLTNooN9utzA640Z7D0",
            "UBS Jardim Eliane": "https://chat.googleapis.com/v1/spaces/AAAAWSrGLHw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=CC-MlWDhULHufp-aH9tY-gajv-w7p8g38EiBYpZ0f2w",
            "UBS Jardim Icarai Quintana": "https://chat.googleapis.com/v1/spaces/AAAA_ADLI3g/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=xSmM73TqmXBbs8kIjas1HlcyS4CLCf_27eZzwgEwS1g",
            "UBS Jardim Lucelia": "https://chat.googleapis.com/v1/spaces/AAAAtzq1bWQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=YefiY1o2n_EbMd3b7ADFllpdiWP8ffAdeFY5pKNhyXA",
            "UBS Jardim Novo Horizonte": "https://chat.googleapis.com/v1/spaces/AAAAmk7I1g4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=lR_HhT4UFa52-MeiF-pPSbzUkGIRVslOFnOPLfkl9xI",
            "UBS Jardim Orion/Guanhembu": "https://chat.googleapis.com/v1/spaces/AAAApiARrQ4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ICwb5m5JYX1UsY8IuM69AGK5wrkt3Sl4qQJqIDPqCYI",
            "UBS Jardim Reimberg": "https://chat.googleapis.com/v1/spaces/AAAAQwrhnNg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4xwBwjstqv56YLbqerJeBnVWL7vle53F754g4siwaZ8",
            "UBS Jardim Republica": "https://chat.googleapis.com/v1/spaces/AAAAJfPrDFA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=-qY9xLZbeaBb2gWUS0M0MW62X6zFNneAjI2KKTKQD_w",
            "UBS Jardim São Bernardo": "https://chat.googleapis.com/v1/spaces/AAAAFngpxy8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=NliDdpcIKvdZfduIpBKHPW-CWZ3I7_pR_DW5ZEAa4lo",
            "UBS Jardim Tres Coracoes": "https://chat.googleapis.com/v1/spaces/AAAAFtAfeKc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9EoRmEZSt3kYy2Nmkz1NGtt0pfhcwyh2VubOxuIngDA",
            "UBS Jordanopolis": "https://chat.googleapis.com/v1/spaces/AAAAc0ND0xw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=lfZm_UpxxZu2WtTLHyTge_o_jV0hfz1JVOEMatyhYWA",
            "UBS Parque Residencial Cocaia": "https://chat.googleapis.com/v1/spaces/AAAAdIoxwuc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=R8KWH-6seHjFKkR4J6lZYlDg6q4zh6oePPvqPPgzPTY",
            "UBS Shangrila Ellus": "https://chat.googleapis.com/v1/spaces/AAAAE3Q0SW4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=hWNRyaPc9N7nw2vgJ424_lyCOPBRjwHOlYm5ApCAJdY",
            "UBS Varginha": "https://chat.googleapis.com/v1/spaces/AAAA3zyXDxw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=7N1jBb4tNbC-q7aep7q8wSK39ywxSAHklGC2KZy6gI0",
            "UBS Veleiros": "https://chat.googleapis.com/v1/spaces/AAAA8m8qJEQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=OTbuEUdv2jD6Dnn9yL4qOYWpxcOvoZaYAiJlSK94nPY",
            "UBS Vila Natal": "https://chat.googleapis.com/v1/spaces/AAAA6wzOayo/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=8PWDAjby_AIT1X2Afn7-DXlwEWDNqPTow9f86YVCC8s",
        },
        unitsParelheiros: {

            // # PARELHEIROS
            "UBS Barragem": "https://chat.googleapis.com/v1/spaces/AAAAj82vJVM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=aRy_BginQNxpdqjIC7LqATqA4HIpteTmbKAMddWb5Iw",
            "UBS Colonia": "https://chat.googleapis.com/v1/spaces/AAAA9RDFMeQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=iNuMcQ5LiPBs0LukP4n3_0BaH9ewQGkUZC0_2PsSMIE",
            "UBS Dom Luciano Bergamin": "https://chat.googleapis.com/v1/spaces/AAAAeBJQ8AM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=I5jqhLQCW4sh8mWh520v2flT14hwJaO-zwTlCBJKIEc",
            "UBS Jardim Campinas": "https://chat.googleapis.com/v1/spaces/AAAA2lSNc3E/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=j1VVBBPOqRqYDePnOAaTtpQn5wQuyq2YTJ0PE-X1vnc",
            "UBS Jardim das Fontes": "https://chat.googleapis.com/v1/spaces/AAAAtrL_gVU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Z1reKvz6nnl-oBt8-p3wSaUYKN-ew9Hhlruf17uT_6w",
            "UBS Jardim Embura": "https://chat.googleapis.com/v1/spaces/AAAAMuRhlnc/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=nNSSzA_Y5fAX0oQ9fz7Ql_GwxtzL8jlMWy3aQRsZu_I",
            "UBS Jardim Ipora": "https://chat.googleapis.com/v1/spaces/AAAARj1dEmE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=bcSaGOPu5l17UsvUqRKZY36XkoeGdDN-Zl32gdRN85c",
            "UBS Jardim Santa Fe": "https://chat.googleapis.com/v1/spaces/AAAAgB8RE6c/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=54ioRJ68fxRpuuYsjUtw0xHIB7wjF0W_BZ2KemyVUPI",
            "UBS Jardim São Norberto": "https://chat.googleapis.com/v1/spaces/AAAASBZ52QA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=7ULENnCnc5qSaEeG790dASx-pQJj_F-ode4n00IyLpc",
            "UBS Jardim Silveira": "https://chat.googleapis.com/v1/spaces/AAAAXR_eGq0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=zphYeLfBBr19WXsFWYIThFpp3JDL1Kwswi98EpyGWeQ",
            "UBS Vera Poty": "https://chat.googleapis.com/v1/spaces/AAAAISOIQ9E/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=X8-qM8CGW2UVbXrHh9geiMQTqbNZU5d8zXDD0GYCxec",
            "UBS Krukutu": "https://chat.googleapis.com/v1/spaces/AAAA1-Lup3Y/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=5XCcL12iq_m2_zRsEb9XaOUI8kWARYcSj35RDOOY4cI",
            "UBS Marsilac": "https://chat.googleapis.com/v1/spaces/AAAAYFBjPkk/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=PR7tMmgQmfYG3zmHpgV4ahUsFxtIN-an0gdyqQaLvwU",
            "UBS Nova America": "https://chat.googleapis.com/v1/spaces/AAAATffyDN8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=N6d9khaMEacL7ncpOjR0WcTfxsECe2phaUxDyxV15rE",
            "UBS Parelheiros": "https://chat.googleapis.com/v1/spaces/AAAA-R-OLek/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=QTMhWlaKKiSqINZur-QstAc4G56rtlM0rbkDr8YfrEM",
            "UBS Recanto Campo Belo": "https://chat.googleapis.com/v1/spaces/AAAAarinGD0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jBCQkAO-QnMXavkppexEM5X8sOLToUWeiAjy7Jck8U4",
            "UBS Vargem Grande": "https://chat.googleapis.com/v1/spaces/AAAACskc3II/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Y_AuHsndEBjLtlE9hESJnm0CFCupPnl1jUFZsvHI0L0",
            "UBS Vila Roschel": "https://chat.googleapis.com/v1/spaces/AAAAW_LimrQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=AW8V6xYd8m0PEY-6z34tDL7gk2-3sB8euf56riEqhHA",
            "UBS Vila Marcelo": "https://chat.googleapis.com/v1/spaces/AAAA5edlq0Q/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=5c-u4IRp1bMCDXyyhuMK7_Mp2ToubV55rALb7S918KI",

            //    #SALAS
            // "Faltosos de Vacina": "https://chat.googleapis.com/v1/spaces/AAAARzr90E8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=F7rNLfQNxvOABxwjTwQb5CNep9GitrhOZdo_YGtnJZU",

        },
        unitsGerentesCapela: {
            //    #GERENTES
            "AE Dr. Milton Aldred": "https://chat.googleapis.com/v1/spaces/qHmRbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=jZKL2-5KVwq3e43v7fzqKPNXebNPfjoOzTW04WOX0Mo",

            "AMA Jardim Icaraí": "https://chat.googleapis.com/v1/spaces/rwIRbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UhTwgzv5uAmGg9-sTnRDz8UYlDb1U_cNR8pzufTBmds",

            "AMA UBS Jardim Mirna": "https://chat.googleapis.com/v1/spaces/svZfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=dAvJhXDl5vjF_aTMo3fZ-ozqLuEpFjdEbySbHHxHfhI",

            "AMA UBS Jardim Castro Alves": "https://chat.googleapis.com/v1/spaces/1X2cVYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9dGLzKlc0PUs0LW7JQliH-zOvg8H2FNumLstRUWdl-E",

            "APD Interlagos": "https://chat.googleapis.com/v1/spaces/wgCBVYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=uZcKgw-uc3RiiaY_akiHfuoJjXLRNQZX2wwi7LxYOD0",

            "CAPS Adulto III Capela": "https://chat.googleapis.com/v1/spaces/qHBhbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ySuDEJTsRPK3GK9W6MTGNiRwde0U-o6pJG8IXmubhKY",

            "CAPS Adulto III Grajaú": "https://chat.googleapis.com/v1/spaces/iCYxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=AqwZoTv52Ldg8vrTyEpPWuOfGsO4RJFZSfGY1DrqdvU",

            "CAPS Álcool e Drogas III Grajaú": "https://chat.googleapis.com/v1/spaces/-4ZxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=buQvIvBO-r_67KANXo8cIafe8TOKj1-9nRbLiGQkfG8",

            "CAPS IJ II Capela": "https://chat.googleapis.com/v1/spaces/0dmxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=LcGvt_rfTvVyeiOqs3DnGb0zW29m7k1IzI-qQSTftMk",

            "CAPS IJ II Cidade Dutra": "https://chat.googleapis.com/v1/spaces/xGxxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=JBrhh-0qThnX0dNduBVVWfcGr4ZVDqD0BkZvgVZjkaY",

            "EEV Capela de Socorro": "https://chat.googleapis.com/v1/spaces/1dqxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3UzwmGVHQPw-V34Elcpqe3y1psoCNwwcb68HzCm8Txg",

            "EMAD Hospital Capela do Socorro": "https://chat.googleapis.com/v1/spaces/rirxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=9hDmakHXWukTjfjagjKA1HtDv3kpST2s30pJcERyg0o",

            "EMAD Novo Horizonte": "https://chat.googleapis.com/v1/spaces/oB4RbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=pnAx1TSvXJ_MQkVB41JgOuqzQChYVdU_XitkUkj8rrk",

            "PAI Cidade Dutra": "https://chat.googleapis.com/v1/spaces/v-8xbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=wrlRK6FIreMVvKUGK0448ZxQ_sbDIXgxBEUDXJDMSgk",

            "PAI Grajaú": "https://chat.googleapis.com/v1/spaces/1ffRbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=k2ilkHV0fc4v87afNedcikdheHmD5BhwFrrPJ5FQJbE",

            "PAI São José": "https://chat.googleapis.com/v1/spaces/2LpxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=dc9eXkU9jhm_vKeZ_bkI0IhW16Za4Id-n8TmUK8tgfs",

            "SAD Capela do Socorro": "https://chat.googleapis.com/v1/spaces/qhIJbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=XcpREaCAWxY65VO6KTCd-Pfc3_koNCnb3u4BksFF3Fw",

            "SRT II Capela do Socorro": "https://chat.googleapis.com/v1/spaces/yZqJbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fc_WlGdTKmCy4_MPnJRL2q8WzO1rXesj-BOXz5p0PFA",

            "SRT III Capela do Socorro": "https://chat.googleapis.com/v1/spaces/t9mxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=smiCXAkZ2ynw7o1JUGtv5vIZaDvl3RbLzbnI6fjb3pE",

            "SRT IV Capela do Socorro": "https://chat.googleapis.com/v1/spaces/tVJxbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=loXMX-Jl5kYhGotg9GN9eURPLcmM1rmeM9nxBs2OeHs",

            "SRT I Grajaú": "https://chat.googleapis.com/v1/spaces/wDGZbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=aEgFcaKb9FtOuauibYga25N3pwjHgRJ_SAgOrro_Qk0",

            "SRT II Grajaú": "https://chat.googleapis.com/v1/spaces/mXLZbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=t-Bwj6TnVnAzsRzi_WiTFsyKR_WVcKklQqAmLZJnj9I",

            "UBS Alcina": "https://chat.googleapis.com/v1/spaces/mf4ZbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=NsHQGr9_BZbNvXl_S5DBoGwTVSaBfnjd4cBWLE0JOmo",

            "UBS Anchieta": "https://chat.googleapis.com/v1/spaces/slUpbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=QDeymBHLBn23lJEGXllBaov_ymcUW6ODq6FVMiu-ICo",

            "UBS Autódromo": "https://chat.googleapis.com/v1/spaces/_SBfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=TIF26lwpglbGSvev2_PTCSyjEmVnrchZuZgMx5B62Og",

            "UBS Cantinho do Céu": "https://chat.googleapis.com/v1/spaces/2SEvSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=nT8rEOVCCtxxxuEbz701fb9P00jN3FeRnTXEYwiQnKs",

            "UBS Chácara do Conde": "https://chat.googleapis.com/v1/spaces/5bfvSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=xScOq5Zn09kK72JaUBXmzcSl-VoC1Q4PcB0UzQPvjCA",

            "UBS Chácara do Sol": "https://chat.googleapis.com/v1/spaces/kRKNwwAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ZxEjEdNDV-6jVozcX18L10-ezskq3yuiE0tdkuGhcIY",

            "UBS Chácara Santo Amaro": "https://chat.googleapis.com/v1/spaces/5R5bLMAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=V02e1Wd2BESZrDoPIRfdjcaHGw2xMy8sovzIYber5EM",

            "UBS Dr. Sergio Chaddad": "https://chat.googleapis.com/v1/spaces/3YLZbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=LfOwOQA-Gs5T_Jw9ITlHGzXCYRbG918jXJ5PXvHDAKA",

            "UBS Gaivotas": "https://chat.googleapis.com/v1/spaces/mVzfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=zhP7xcqBFuiGIxJPFBuyjCuOrg1ERpaBOzbN9gsyoxI",

            "UBS Jardim Cliper": "https://chat.googleapis.com/v1/spaces/hj05bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=EcZ-JuTwqo_sdDicJ04ywy5IZ_lwTBUKNnTfr_pKN9U",

            "UBS Jardim Eliane": "https://chat.googleapis.com/v1/spaces/1OE5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=YvuYSAZ7G_oFO-nuMnUUUBvSXEyNOBagpXLm_PL3RlI",

            "UBS Jardim Icaraí": "https://chat.googleapis.com/v1/spaces/pfWF3wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=TFNUu4V1woTA3hKpHj3myf_ANGc1juOeiKaKeqDTL9g",

            "UBS Jardim Lucélia": "https://chat.googleapis.com/v1/spaces/8SgfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=6A78eHY1QjLKWc_BIbcaeSO-22FuWgX08Dd7sDLMqo4",

            "UBS Jardim Orion": "https://chat.googleapis.com/v1/spaces/ndlfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=PFLJKOaWX07Gaz8cLj8I31OIvLNJyjl4LqudER3KR4E",

            "UBS Jardim Reimberg": "https://chat.googleapis.com/v1/spaces/50tp4wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=-Db2vYzPTKIAc1GLR_fx32Rivc-wTZVfPJuBN-iCEvo",

            "UBS Jardim República": "https://chat.googleapis.com/v1/spaces/lXHpbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=GuXnIqJiBgEcu2SNoatbdqj5n0nJYvQ4XBE4EmvlLPg",

            "UBS Jardim São Bernardo": "https://chat.googleapis.com/v1/spaces/n4J5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=odr95L4_rYoNXjofbNBQ-oR0q5B2sCpycMcUjcmHTWA",

            "UBS Jardim Três Corações": "https://chat.googleapis.com/v1/spaces/vp4unwAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=FDntAdflXzFBUrD2ASPZNTgAokWHgQuzMPjkVjzMLzU",

            "UBS Jordanópolis": "https://chat.googleapis.com/v1/spaces/h3pfXwAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4Cx5o5Nyuw1FanhYqMCK-SrrP5Z5nKmZuV0ejAHMLys",

            "UBS Shangrilá": "https://chat.googleapis.com/v1/spaces/p_vxUsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UKn-WQFxTssHePULEtmPdp5qc9ZKlyfA340JPoiC3z4",

            "UBS Varginha": "https://chat.googleapis.com/v1/spaces/_ik5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=wS_OSOGAXZGSqan1xiGbk0PJ4uPXlUR73QtRtgBvpGc",

            "UBS Veleiros": "https://chat.googleapis.com/v1/spaces/ueBESUAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UAiKCn0rCRSYB5vsPOeSjH4vVxcEfvxiFatN6Q2laZU",

            "UBS Vila Natal": "https://chat.googleapis.com/v1/spaces/mCOl4wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=LsO3QyzAy7a2gFsxYNaevSnughAYLE-8RhLHWbEiawo",

            "UCCI Capela do Socorro": "https://chat.googleapis.com/v1/spaces/qFh5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3I89J2mBu-Anncv76Ygnf3V__JX-mcrjay6MTT2ov38",

            "UPA Maria Antonieta": "https://chat.googleapis.com/v1/spaces/nTSu4wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=5PoRmB-trN5RB25IjIg3gGGj5GkW-xNhCBDmhIBvOHU",

            "URSI Capela": "https://chat.googleapis.com/v1/spaces/q6Pq84AAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=z84ykVcRvq8BsDvw9y22o-YfWk3dT7N4Bg4DACAewBs",

        },
        unitsGerentesParelheiros: {

            "UBS Barragem": "https://chat.googleapis.com/v1/spaces/oJ162sAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=esznl0uVF9E68T-dVU4tiah5aRDoe29Hz87O6brgYOo",

            "UBS Colonia": "https://lh4.googleusercontent.com/proxy/LlHtPy8ydGfg7RUcx7EqlFHvgX6_qwCY2na7KDhp-j6clPscrZwMg8-ax3LwnQb5ogCNHvSwjSL2uhUO1jvSR4cs3I5infcgT5aaSb7Gr5zNmr5iP8zqbyMUg",

            "UBS Dom Luciano": "https://chat.googleapis.com/v1/spaces/sdnFbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=XfOy5i3kjaB_AdzJdXiL7SIWLIEJqV6lKA3Vr0pdw9E",

            "UBS Jardim Campinas": "https://chat.googleapis.com/v1/spaces/gtZ5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=HDPOkOVMDjDzhNAB60cHHs9XJcBVd9XJJln4QUIDpt8",

            "UBS Jardim das Fontes": "https://chat.googleapis.com/v1/spaces/zzZ5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=S1Ka8jF0ImD8OtS0DNVCQ9RIFy07scGD-WQu73tEMrE",

            "UBS Jardim Embura": "https://chat.googleapis.com/v1/spaces/7dUfSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=vx_f18lJSB9jZQAlnn-bWbcEZKDy61lXMfFZGXX5oDo",

            "UBS Jardim Iporã": "https://chat.googleapis.com/v1/spaces/5Sb5bsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3mKs2N9Dvb_t8Xvvyqk2Kqp3zuy_K_DUZx6LjASw4VI",

            "UBS Jardim Santa fé": "https://chat.googleapis.com/v1/spaces/0KRFbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=dEDE7pshNqEhVMyOdFHMUrOvbZ6mWqCoJrMVqqrT_J8",

            "UBS Jardim São Norberto": "https://chat.googleapis.com/v1/spaces/rhqvSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=f3yvtbloGfVcWbCQc9JR-HErxpAxI8FTfHu9_TU81e8",

            "UBS Jardim Silveira": "https://chat.googleapis.com/v1/spaces/6A0alYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=rkmJwQ8XAiIpHFkSfCrAfA0Sk0oYGLXIeuTxutIM6MI",

            "UBS Krukutu": "https://chat.googleapis.com/v1/spaces/0_XFbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=vkkFEFpko9CJIkQpy1M53Ar7ZMgQiqAtWUE-v4I-4ZY",

            "UBS Marsilac": "https://chat.googleapis.com/v1/spaces/2q_PSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qRzv5VG7DeGI7POchUEWsXaOcz6618Nfb7eZ3jjHp-4",

            "UBS Nova America": "https://chat.googleapis.com/v1/spaces/yRvlbsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=LUqni0m3qXYumE8o3yf9RucrxQfKxuZqfOe27iijlHk",

            "UBS Parelheiros": "https://chat.googleapis.com/v1/spaces/6Wjl4wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=TG8_P-bRaWIPcUaZqJQaXLV-PS-ALJMJTNrIdF6rBD0",

            "UBS Recanto Campo Belo": "https://chat.googleapis.com/v1/spaces/pfox4wAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Td8Uxj6CUuvGhalqXj18nS-jmBkL3CkpoaB06yr1yEU",

            "UBS Vargem Grande": "https://chat.googleapis.com/v1/spaces/wB1khYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=nFHsYifeOA7e6TwiV17DqYy7iocTkJGd0K-YOrYREjs",

            "UBS Vera Poty": "https://chat.googleapis.com/v1/spaces/6qVI7sAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=uHbLoYZKEMzm8K2bHVEPmdBV2ySEseECrTztFlKlURE",

            "UBS Vila Marcelo": "https://chat.googleapis.com/v1/spaces/t4PvSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=3eC8waPJt0n_4Y8IhmfWLarM3Esff1P1yFyA6Ah39us",

            "UBS Vila Roschel": "https://chat.googleapis.com/v1/spaces/gA2vSsAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=QgbLJbe39mKit4IpQCVh9ABxai_2zoOyQhngC1sRhzE",

            "UPA Parelheiros": "https://chat.googleapis.com/v1/spaces/xqVI7sAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=7klHlBDUe2EfhENbYX1SSQ4XjkJTs2sEgSkEfpopY2w",

            "CAPS IJ II Parelheiros": "https://chat.googleapis.com/v1/spaces/vXQX3YAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=HyS1cBHRs640pgjXhNokMGdcLSnaS0jc_0oUQII4ezM",

            "CEO III Parelheiros": "https://chat.googleapis.com/v1/spaces/jJ2TWYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=npHpvaSq8HQLcDQQV0gI_fXLFtMxSlbOSTfv9fTb9MY",

            "EMAD Parelheiros": "https://chat.googleapis.com/v1/spaces/9ouIDYAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=DcxKc58GlJW8LxJ1x4UdCW17G-qIx6rqjQZqD7PXlw4",

            "PAI Parelheiros": "https://chat.googleapis.com/v1/spaces/-af73QAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=T34a_awYy22JYC142oripZHu49f-zgF-vaGKNyl6CWU",

            "SRT Parelheiros I": "https://chat.googleapis.com/v1/spaces/xWmY7sAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=Kf0JL8NZwEgPL6f83RKPBeHXDXnn4zwVMHmVhzjE2A8",

            "SRT Parelheiros II": "https://chat.googleapis.com/v1/spaces/3F247sAAAAE/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=lgpRvDMnwVCif-E-p7DeyneADDHbYW4npqwA8J-M2gE",
        },
        selectedUnits: [],
        expanded: {
            capela: false,
            parelheiros: false,
            gerentesCapela: false,
            gerentesParelheiros: false
        }
    },
    methods: {
        sendMessage() {
            if (!this.validateInput()) return;

            const promises = this.selectedUnits.map(unit =>
                this.sendMessageToUnit(unit, this.message)
            );

            Promise.all(promises)
                .then(() => {
                    this.updateStatus('success', 'Mensagens enviadas com sucesso! ✨🎉');
                })
                .catch(error => {
                    this.updateStatus('error', 'Erro ao enviar mensagens: ' + error.message);
                });
        },
        validateInput() {
            if (!this.message) {
                this.updateStatus('error', 'Por favor, digite uma mensagem.');
                return false;
            }
            if (this.selectedUnits.length === 0) {
                this.updateStatus('error', 'Por favor, selecione pelo menos uma unidade.');
                return false;
            }
            return true;
        },
        sendMessageToUnit(unit, message) {
            const path = this.allUnits[unit];
            return axios.post(path, { text: message })
                .then(response => {
                    console.log(`Message sent to ${unit} successfully`);
                })
                .catch(error => {
                    console.error(`Error sending message to ${unit}:`, error);
                    throw error;
                });
        },
        updateStatus(type, message) {
            this.status = { type, message };
        },
        toggleSection(section) {
            this.expanded[section] = !this.expanded[section];
        },
        selectAllInSection(section) {
            let units = this.getUnitsForSection(section);
            const allSelected = units.every(unit => this.selectedUnits.includes(unit));

            if (allSelected) {
                this.selectedUnits = this.selectedUnits.filter(unit => !units.includes(unit));
            } else {
                this.selectedUnits = [...new Set([...this.selectedUnits, ...units])];
            }
        },
        getUnitsForSection(section) {
            switch (section) {
                case 'capela': return Object.keys(this.unitsCapela);
                case 'parelheiros': return Object.keys(this.unitsParelheiros);
                case 'gerentesCapela': return Object.keys(this.unitsGerentesCapela);
                case 'gerentesParelheiros': return Object.keys(this.unitsGerentesParelheiros);
                default: return [];
            }
        }
    },
    computed: {
        allUnits() {
            return {
                ...this.unitsCapela,
                ...this.unitsParelheiros,
                ...this.unitsGerentesCapela,
                ...this.unitsGerentesParelheiros
            };
        }
    }
});