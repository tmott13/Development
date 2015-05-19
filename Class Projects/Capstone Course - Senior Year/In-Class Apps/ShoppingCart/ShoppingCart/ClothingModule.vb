Module ClothingModule

    ' This module contains information about the various print and audio books available for purchase.

    ' Global constants

    Public Const g_decSHIPPING_PER_ITEM As Decimal = 2D ' The shipping cost per item is $2.00

    Public Const g_decSALES_TAX As Decimal = 0.06D      ' The sales tax is 6%

    ' Names of the available pants
    Public Const g_strNAME_PANTS_ITEM_0 As String = "BluePants"
    Public Const g_strNAME_PANTS_ITEM_1 As String = "RedPants"
    Public Const g_strNAME_PANTS_ITEM_2 As String = "GreenPants"
    Public Const g_strNAME_PANTS_ITEM_3 As String = "PurplePants"

    ' Prices of the avialable pants
    Public Const g_decPRICE_PANTS_ITEM_0 As Decimal = 11.95D
    Public Const g_decPRICE_PANTS_ITEM_1 As Decimal = 15.5D
    Public Const g_decPRICE_PANTS_ITEM_2 As Decimal = 29.95D
    Public Const g_decPRICE_PANTS_ITEM_3 As Decimal = 18.5D

    ' Names of the avialable boots
    Public Const g_strNAME_BOOTS_ITEM_0 As String = "BlueBoots"
    Public Const g_strNAME_BOOTS_ITEM_1 As String = "RedBoots"
    Public Const g_strNAME_BOOTS_ITEM_2 As String = "GreenBoots"
    Public Const g_strNAME_BOOTS_ITEM_3 As String = "PurpleBoots"

    ' Prices of the availableboots
    Public Const g_decPRICE_BOOTS_ITEM_0 As Decimal = 29.95D
    Public Const g_decPRICE_BOOTS_ITEM_1 As Decimal = 11.5D
    Public Const g_decPRICE_BOOTS_ITEM_2 As Decimal = 14.5D
    Public Const g_decPRICE_BOOTS_ITEM_3 As Decimal = 12.95D

    ' Global variables
    Public g_decPrice As Decimal = 0D           ' To hold the price of the currently selected book.
    Public g_strName As String = String.Empty   ' To hold the name of the currently selected book.
End Module
