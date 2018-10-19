function S(x1,y1,x2,y2,x3,y3){
								if ((((x1==x2 && y1!=y2) || (x1!=x2 && y1==y2))) && (((x2==x3 && y2!=y3)|| (x2!=x3 && y2==y3)) || ((x1==x3 && y1!=y3)  || (x1!=x3 && y1==y3)))) return('true')
									else if ((((x1==x2 && y1!=y2) || (x1!=x2 && y1==y2)) || ((x2==x3 && y2!=y3)|| (x2!=x3 && y2==y3))) && (((x1==x3 && y1!=y3)  || (x1!=x3 && y1==y3)))) return('true')
										else if ((((x1==x2 && y1!=y2) || (x1!=x2 && y1==y2)) || ((x3==x1 && y3!=y1)|| (x3!=x1 && y3==y1))) && (((x2==x3 && y2!=y3)  || (x2!=x3 && y2==y3)))) return('true')
											else return('false')
							}