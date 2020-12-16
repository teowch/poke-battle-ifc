class Log
  constructor: ->
    @log = []
    @turn = 0
    @attack = 0
  
  message: (str) ->
    # @log[@turn] = [] unless @log[@turn]?
    # @log[@turn][@attack]['data'] = []
    # @log[@turn][@attack]['strings'] = []

    @log[@turn] = [] unless @log[@turn]?
    @log[@turn][@attack] = {
                          strings: []
                            } unless @log[@turn][@attack]

    @log[@turn][@attack]['damage'] = [] unless @log[@turn][@attack]['damage']?
    @log[@turn][@attack]['heal'] = [] unless @log[@turn][@attack]['heal']?

    if typeof str == 'string'
      @log[@turn][@attack]['strings'].push(this.upperFirst str)
      # console.log str
    else if typeof str == 'object'
      # console.log str
      

      if str['damage']?
        @log[@turn][@attack]['damage'].push(str['damage']) 

      # @log[@turn][@attack]['damage'][0]['damage_took'] = str['damage_took'] if str['damage_took']?

      if str['healing']?
        @log[@turn][@attack]['heal'].push(str['healing'])

      @log[@turn][@attack]['switched'] = str['switched'] if str['switched']?
      @log[@turn][@attack]['changeStage'] = str['changeStage'] if str['changeStage']?

    # console.log @log[@turn]
    # console.log @log[@turn][@attack]['strings']
  
  endAttack: ->
    @attack++
    
  endTurn: ->
    @turn++
    @attack = 0
  
  toString: ->
    str = ''
    for turn in @log
      for attack in turn
        for message in attack
          str += message + "\n"
        
        str += "\n"
      str += "\n"
      
          
    return str.trim()

  upperFirst: (str) ->
    return str.charAt(0).toUpperCase() + str.slice(1)


module.exports = Log
